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
    <div className="grid min-h-screen items-center px-4 sm:px-12 lg:px-24">    
      <header className="flex justify-center border border-slate-400">
        <Image 
            className="h-auto w-auto"
            src={"/logo.svg"}                
            alt="Be The Hero"
            width={250}
            height={106}
            quality={70}
            priority
          />
      </header>        
      <header className="grid grid-row text-center items-center justify-center border border-slate-400">
        <h1 className="text-4xl">Cadastro</h1>
        <p className="text-lg">Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        {/* <Link className="back-link" href="/">
          <FiArrowLeft size="16" color="#E02041"/>
          Não tenho cadastro
        </Link> */}
      </header>

      <section className="justify-center border border-red-400">
        <form className="text-center px-8 sm:px-12 lg:px-24 border border-slate-400" onSubmit={handleRegister}>
          <div className="">
            <label htmlFor="name" className="text-lg font-medium text-gray-500">Nome da Ong</label>
            <input
              name="name"
              type="text" 
              className="focus:ring-red-500 focus:border-red-500"
              placeholder="Nome da ONG" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>          

          <div>
            <label htmlFor="email" className="text-lg font-medium text-gray-500">E-mail</label>
            <input 
              className="focus:ring-red-500 focus:border-red-500"
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
              name="whatsapp"
              className="focus:ring-red-500 focus:border-red-500"
              placeholder="WhatsApp" 
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
          </div>
          

          <div className="space-y-4">
            <div className="">
              <label htmlFor="city" className="text-lg font-medium text-gray-500">Cidade</label>
              <input 
                name="city"
                className="focus:ring-red-500 focus:border-red-500"
                placeholder="Cidade"
                value={city}
                onChange={e => setCity(e.target.value)}  
              />
            </div>
            
            <div className="">
              <label htmlFor="state" className="text-lg font-medium text-gray-500">Estado</label>
              <input 
                className="focus:ring-red-500 focus:border-red-500"
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
          
          <div className="justify-center">
            <button className="relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="submit">Cadastrar</button>
          </div>
        </form>
      </section>      
    </div>
  )
}


