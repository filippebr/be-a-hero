'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';

import api from '../../api/services/axiosClient';

import Link from 'next/link';
import './styles.css';

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
      <header className="py-3 px-4 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-2 justify-self-center">
            <Image 
                className="h-auto w-auto"
                src={'/logo.svg'}                
                alt="Be The Hero"
                width={250}
                height={106}
                quality={70}
                priority
              />
          </div>       

          <div className="lg:col-span-4 py-3 justify-self-center">
            <div className="text-xl">Bem vinda, {ongName}</div>
          </div>
          
          <div className="flex lg:col-span-6 lg:justify-self-end justify-self-center gap-6 items-center">
            <Link 
              className="p-4 bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold text-md" 
              href="/incidents/new">
                Cadastrar novo caso
            </Link>        
            <button className="p-4 rounded-md border-2 bg-transparent border-slate-300 hover:border-slate-400" onClick={handleLogout} type="button">
              <FiPower className="text-xl text-red-500" />
            </button>
          </div>  
        </div>      
      </header>  

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


