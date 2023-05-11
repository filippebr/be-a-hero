'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

// import api from '../../services/api';
import TopHeader from '@/app/components/TopHeader';


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
    <>    
      <TopHeader />
          
      <header className="grid grid-row text-center items-center justify-center mb-10 space-y-2">
        <h1 className="text-4xl">Cadastro</h1>
        <p className="text-lg">
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
        </p>
        
      </header>

      <section >    
        <Link className="flex items-center text-lg text-red-400 transition-opacity duration-300 ease-out opacity-50 hover:opacity-100" href="/">
          <FiArrowLeft size="16" className="text-red-600"/>
          <p className="ml-2">
            Não tenho cadastro            
          </p>
        </Link>
      </section>

      <section className="max-w-3xl w-full justify-center">        
        <form className="border-2 rounded-md border-gray-300 p-4 space-y-4" onSubmit={handleRegister}>
          <div className="">
            <label htmlFor="name" className="text-lg font-medium text-gray-500">Nome da Ong</label>
            <input
              className="mt-2 focus:ring-red-500 focus:border-red-500"
              name="name"
              type="text" 
              placeholder="Nome da ONG" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>          

          <div>
            <label htmlFor="email" className="text-lg font-medium text-gray-500">E-mail</label>
            <input 
              className="mt-2 focus:ring-red-500 focus:border-red-500"
              name="email"
              type="email" 
              placeholder="E-mail" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>          
          
          <div className="">
            <label htmlFor="whatsapp" className="text-lg font-medium text-gray-500">WhatsApp</label>
            <input 
              className="mt-2 focus:ring-red-500 focus:border-red-500"
              name="whatsapp"
              type="text"
              placeholder="WhatsApp" 
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
          </div>
          

          <div className="space-y-4">
            <div className="">
              <label htmlFor="city" className="text-lg font-medium text-gray-500">Cidade</label>
              <input 
                className="mt-2 focus:ring-red-500 focus:border-red-500"
                name="city"
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={e => setCity(e.target.value)}  
              />
            </div>
            
            <div className="grid grid-rows">
              <label htmlFor="state" className="text-lg font-medium text-gray-500">Estado</label>
              <input 
                className="mt-2 w-20 focus:ring-red-500 focus:border-red-500"
                name="state"
                type="text"
                maxLength={2}
                size={2}
                placeholder="UF" 
                value={uf}
                onChange={e => setUf(e.target.value)}   
              />
            </div>           
          </div>
          
          <div className="justify-center ">
            <button className="mt-8 relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="submit">Cadastrar</button>
          </div>
        </form>
      </section>      
    </>
  )
}


