'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';

import api from '../../api/services/axiosClient';

import TopHeader from '@/app/components/TopHeader';
import Link from 'next/link';

type Incident = {
  id: number;
  title: string;
  description: string;
  value: number;
  ong_id: string;
};

export default function Profile() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  
  const router = useRouter();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId]);

  async function handleDeleteIncident(id: number) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      // Fire Code = Font Ligatures
      setIncidents(incidents.filter(incidents => incidents.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    
    router.push('/');
  }

  return (
    <>
      <TopHeader />

      <header className="flex text-center items-center justify-center mb-10">
        <h1 className="text-4xl">Bem Vinda, {ongName}</h1>        
      </header> 
      
      <div className="grid grid-cols-12 gap-4 items-center mb-10">  
        <Link 
          className="col-span-10 text-center p-4 bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold text-md" 
          href="/incidents/new">
            Cadastrar novo caso
        </Link>            
        <button className="col-span-2 p-4 rounded-md border-2 bg-transparent border-gray-300 hover:border-gray-400" onClick={handleLogout} type="button">
          <FiPower className="text-xl text-red-500" />
        </button>
      </div>

      <section className="max-w-3xl w-full justify-center">
        <div className="border-2 rounded-md border-gray-300 p-4 space-y-4">
          <div className="flex text-center items-center justify-center">
            <h1 className="text-3xl font-bold my-2 lg:justify-self-start justify-self-center">
              Casos cadastrados
            </h1>
          </div>
          <div className="">
            <ul className="py-3 px-2 sm:px-4 lg:px-8" >              
              <li className="col-span-6 mb-8">
                <p className="text-md font-bold mb-1 mt-4">CASO: </p>
                <p>Cadelinha atropelada</p>
                <p className="text-md font-bold mb-1 mt-4">DESCRIÇÃO: </p>
                <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</p>
                <p className="text-md font-bold mb-1 mt-4">VALOR: </p>
                <p>R$ 120,00</p>
              </li>

              <li className="col-span-6">
                <p className="text-md font-bold mb-1 mt-4">CASO: </p>
                <p>Cadelinha atropelada</p>
                <p className="text-md font-bold mb-1 mt-4">DESCRIÇÃO: </p>
                <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</p>
                <p className="text-md font-bold mb-1 mt-4">VALOR: </p>
                <p>R$ 120,00</p>
              </li>
            </ul>
          </div> 
        </div>
      </section>
              
    </>
  )
}


