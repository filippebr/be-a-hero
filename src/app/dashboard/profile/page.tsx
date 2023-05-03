'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Image from 'next/image';

import api from '../../api/services/axiosClient';

import './styles.css';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <header className="flex items-center">
        <Image 
          className="h-24"
          src={'/logo.svg'} 
          alt="Be The Hero" 
          width={100}
          height={100}
        />
        <span className="text-xl ml-10" >Bem vinda, {ongName}</span>

        <Link className="w-full h-22 mt-4 py-4 bg-red-500 hover:bg-red-700 rounded-lg text-white items-center font-bold text-md" href="/incidents/new">Cadastrar novo caso</Link>
        <button className="h-20 w-24 rounded-sm border-2 border-slate-500 bg-transparent ml-6 hover:border-gray-700 " onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <div>
        <ul>
          {Array.isArray(incidents) && incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>Valor:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
              
              {/* in onClick I need the parameter to push the id  */}
              {/* but when I push the parameter I executed the function */}
              {/* to this thing not happen I just use the arrow function to create a new one */}
              {/* this way I'm passing to the onClick a function not a return of a function */}
              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#A8A8B3" />
              </button>
            </li>
          ))}        
        </ul>
      </div>      
    </div>
  )
}


