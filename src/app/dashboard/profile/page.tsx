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
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center sm:mx-auto sm:w-full sm:max-w-7xl">
        <div className="flex items-center px-6 lg:justify-self-start justify-around">
          <Image 
            className="h-14 mr-6"
            src={'/logo.svg'} 
            width={100} 
            height={100} 
            alt="Be The Hero"
          />

          <div className="text-xl">Bem vinda, {ongName}</div>
        </div>
        <div className="flex items-center px-6 lg:justify-self-end justify-around">
          <Link 
            className="mx-8 p-4 bg-red-500 hover:bg-red-700 rounded-lg text-white items-center font-bold text-md" 
            href="/incidents/new">
              Cadastrar novo caso
          </Link>
          <button className="p-6 rounded-xl border-2 bg-transparent border-slate-300 hover:border-slate-400" onClick={handleLogout} type="button">
            <FiPower className="text-xl text-red-500" />
          </button>
        </div>       
      </div>        

      <div className="px-6">
        <div>
          <h1 className="text-3xl font-bold my-4">Casos cadastrados</h1>

          <div className="my-4">
            <ul className="grid lg:grid-cols-2 grid-cols-1 justify-around" >              
              <li>
                <p className="font-bold mb-1 mt-4">CASO: </p>
                <p>Cadelinha atropelada</p>
                <p className="font-bold mb-1 mt-4">DESCRIÇÃO: </p>
                <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</p>
                <p className="font-bold mb-1 mt-4">VALOR: </p>
                <p>R$ 120,00</p>
              </li>

              <li>
                <p className="font-bold mb-1 mt-4">CASO: </p>
                <p>Cadelinha atropelada</p>
                <p className="font-bold mb-1 mt-4">DESCRIÇÃO: </p>
                <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</p>
                <p className="font-bold mb-1 mt-4">VALOR: </p>
                <p>R$ 120,00</p>
              </li>
            </ul>
          </div> 
        </div>
      </div>     
         
    </>
  )
}


