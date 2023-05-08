'use client'

import Image from 'next/image';
import React, { useState } from 'react';

// import api from '../../services/api';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();  
    
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      // const response = await api.post('/ongs', data);

      // alert(`Seu ID de acesso: ${response.data.id}`);

      // history.push('/');
    } catch {
      alert(`Erro no cadastro, tente novamente.`);
    }    

  }

  return (
    <div className="grid min-h-screen items-center">    
      <header className="grid px-4 sm:px-12 lg:px-24 justify-center">
        <Image 
            className="h-auto w-auto"
            src={'/logo.svg'}                
            alt="Be The Hero"
            width={250}
            height={106}
            quality={70}
            priority
          />
      </header>        
      <header className="grid grid-rows-2 px-4 sm:px-12 lg:px-24 space-y-4 items-center justify-center">
        <h1 className="text-4xl">Cadastro</h1>
        <p className="text-lg">Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        {/* <Link className="back-link" href="/">
          <FiArrowLeft size="16" color="#E02041"/>
          Não tenho cadastro
        </Link> */}
      </header>

      <section className="grid lg:grid-cols-12 px-4 sm:px-12 lg:px-24">
        <form className="lg:col-span-12 justify-self-center space-y-4" onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="WhatsApp" 
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="mt-8 space-y-4">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}  
            />
            <input 
              className="w-auto"
              type="text"
              maxLength={2}
              size={2}
              placeholder="UF" 
              value={uf}
              onChange={e => setUf(e.target.value)}   
            />            
          </div>
          <div className="flex justify-center">
            <button className="relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Cadastrar</button>
          </div>
        </form>
      </section>      
    </div>
  )
}


