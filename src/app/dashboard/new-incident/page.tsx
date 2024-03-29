'use client'

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// import api from '../../services/api';

import TopHeader from '@/app/components/TopHeader';
import Link from 'next/link';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  // const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      // await api.post('incidents', data, {
      //   headers: {
      //     Authorization: ongId
      //   }
      // });

      // history.push('/profile');
    } catch(err) {
      alert('Error ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <>
      <TopHeader /> 

      <header className="grid grid-row text-center items-center justify-center mb-10">
        <h1 className="text-4xl">Cadastrar Novo Caso</h1>
        <p className="text-lg">
          Descreva o caso detalhadamente para encontrar um herói para resolver isso.
        </p>        
      </header>
      
      <section >    
        <Link className="flex items-center text-lg text-red-600 transition-opacity duration-300 ease-out opacity-75 hover:opacity-100" href="/profile">
          <FiArrowLeft size="16" color="#E02041"/>
          Voltar para home
        </Link>
      </section>

      <section className="max-w-3xl w-full justify-center">
        <form className="border-2 rounded-lg border-gray-300 p-4 space-y-4" onSubmit={handleNewIncident}>
          
          <div className="">
            <label htmlFor="title" className="text-lg font-medium text-gray-500">Título do Caso</label>
            <input
              className="w-full h-16 mt-2 py-4 px-6 border border-gray-300 rounded-lg focus:ring-red-300 focus:border-red-300 focus:outline-none"
              name="title"
              type="text" 
              placeholder="Título do caso" 
              value={title}
              onChange={e => setTitle(e.target.value)}              
            />
          </div> 

          <div className="">
            <label htmlFor="description" className="text-lg font-medium text-gray-500">Descrição</label>
            <textarea
              className="w-full resize-y h-24 mt-2 py-4 px-6 border border-gray-300 rounded-lg focus:ring-red-300 focus:border-red-300 focus:outline-none"
              name="description"
              placeholder="Descrição" 
              value={description}
              onChange={e => setDescription(e.target.value)}              
            />
          </div> 

          <div className="">
            <label htmlFor="value" className="text-lg font-medium text-gray-500">Valor em Reais</label>
            <textarea
              className="w-full resize-y h-24 mt-2 py-4 px-6 border border-gray-300 rounded-lg focus:ring-red-300 focus:border-red-300 focus:outline-none"
              name="value"
              placeholder="Valor em reais" 
              value={value}
              onChange={e => setValue(e.target.value)}              
            />
          </div> 

          <button 
            className="mt-8 relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-medium rounded-lg text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" 
            type="submit"
          >
              Cadastrar
          </button>
        </form>
      </section>    
    </>
        
  );
}

