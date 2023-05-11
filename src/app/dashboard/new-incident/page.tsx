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
        <p className="text-lg">Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        {/* <Link className="back-link" href="/">
          <FiArrowLeft size="16" color="#E02041"/>
          Não tenho cadastro
        </Link> */}
      </header>
      
      <section >    
        <Link className="back-link" href="/profile">
          <FiArrowLeft size="16" color="#E02041"/>
          Voltar para home
        </Link>
      </section>

      <section className="max-w-3xl w-full justify-center">
        <form className="border-2 rounded-md border-gray-300 p-4 space-y-4" onSubmit={handleNewIncident}>
          
          <div className="">
            <label htmlFor="title" className="text-lg font-medium text-gray-500">Título do Caso</label>
            <input
              className="mt-2 focus:ring-red-500 focus:border-red-500"
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
              className="mt-2 focus:ring-red-500 focus:border-red-500"
              name="description"
              placeholder="Descrição" 
              value={description}
              onChange={e => setDescription(e.target.value)}              
            />
          </div> 

          <div className="">
            <label htmlFor="value" className="text-lg font-medium text-gray-500">Valor em Reais</label>
            <textarea
              className="mt-2 focus:ring-red-500 focus:border-red-500"
              name="value"
              placeholder="Valor em reais" 
              value={value}
              onChange={e => setDescription(e.target.value)}              
            />
          </div> 

          <button className="mt-8 relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="submit">Cadastrar</button>
        </form>
      </section>    
    </>
        
  );
}

