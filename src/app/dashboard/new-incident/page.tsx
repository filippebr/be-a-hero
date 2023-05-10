'use client'

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// import api from '../../services/api';

import Logo from '@/app/components/Logo';
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
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-12 lg:px-24">    
      <header className="flex justify-center my-10">
        <Logo />
      </header>        
      <header className="grid grid-row text-center items-center justify-center mb-10">
        <h1 className="text-4xl">Cadastrar Novo Caso</h1>
        <p className="text-lg">Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        {/* <Link className="back-link" href="/">
          <FiArrowLeft size="16" color="#E02041"/>
          Não tenho cadastro
        </Link> */}
      </header>
      <section>    
        <Link className="back-link" href="/profile">
          <FiArrowLeft size="16" color="#E02041"/>
          Voltar para home
        </Link>
      </section>

      <form onSubmit={handleNewIncident}>
        <input 
          placeholder="Título do caso" 
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Descrição" 
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input 
          placeholder="Valor em reais" 
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <button className="button" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

