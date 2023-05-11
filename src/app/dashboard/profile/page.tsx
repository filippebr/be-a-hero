'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';

import api from '../../api/services/axiosClient';

import Logo from '@/app/components/Logo';
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
      <header className="flex justify-center my-10">
        <Logo />
      </header> 

      <header className="flex text-center items-center justify-center mb-10">
        <h1 className="text-4xl">Bem Vinda, {ongName}</h1>        
      </header> 
      
      <div className="grid grid-cols-12 gap-4 items-center">  
        <Link 
          className="col-span-10 text-center p-4 bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold text-md" 
          href="/incidents/new">
            Cadastrar novo caso
        </Link>            
        <button className="col-span-2 p-4 rounded-md border-2 bg-transparent border-slate-300 hover:border-slate-400" onClick={handleLogout} type="button">
          <FiPower className="text-xl text-red-500" />
        </button>
      </div>

      <main className="py-3 px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 ">
          <h1 className="col-span-4 text-3xl font-bold my-4 lg:justify-self-start justify-self-center">Casos cadastrados</h1>
        </div>
        <div className="">
          <ul className="grid lg:grid-cols-12 gap-4 py-3 px-6 sm:px-12 lg:px-24" >              
            <li className="col-span-6">
              <p className="font-bold mb-1 mt-4">CASO: </p>
              <p>Cadelinha atropelada</p>
              <p className="font-bold mb-1 mt-4">DESCRIÇÃO: </p>
              <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</p>
              <p className="font-bold mb-1 mt-4">VALOR: </p>
              <p>R$ 120,00</p>
            </li>

            <li className="col-span-6">
              <p className="font-bold mb-1 mt-4">CASO: </p>
              <p>Cadelinha atropelada</p>
              <p className="font-bold mb-1 mt-4">DESCRIÇÃO: </p>
              <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</p>
              <p className="font-bold mb-1 mt-4">VALOR: </p>
              <p>R$ 120,00</p>
            </li>
          </ul>
        </div> 
      </main>
              
    </>
  )
}


