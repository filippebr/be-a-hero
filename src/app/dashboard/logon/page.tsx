'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import api from '../../api/services/axiosClient';

import TopHeader from '@/app/components/TopHeader';

export default function Logon() {
  const [id, setId] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      console.log(response);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      router.push('/profile');
    } catch (err) {
      console.log("Falha no Login, tente novamente.");
    }
  }

  return (
    <>        
      <TopHeader />  
            
      <form className="border-2 rounded-md border-gray-300 p-4 space-y-4 mb-10" onSubmit={handleLogin}>
        <h1 className="mt-4 py-2 text-center text-3xl">
          Faça seu login
        </h1>
        <input 
          className="mt-4"
          placeholder="Sua ID" 
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button className="w-full h-22 mt-4 py-4 bg-red-500 hover:bg-red-700 rounded-lg text-white items-center font-bold text-md transition-opacity duration-300" type="submit">Entrar</button>
        <div className="grid grid-cols-2 gap-2 mt-4 items-center">
          <Link className="flex text-md items-center text-lg text-black-400 transition-opacity duration-300 ease-out opacity-50 hover:opacity-100" href="/register">
            <FiLogIn className="mr-2 text-xl text-red-500" />
            Não tenho cadastro
          </Link>

          <div className="text-md items-center text-lg text-red-400 transition-opacity duration-300 ease-out opacity-50 hover:opacity-100">
            <a href="#" className="font-medium">
              Esqueci o password
            </a>
          </div>

        </div>
        
      </form>
      
      <div>
        <Image
          src={'/heroes.png'} 
          alt="Heroes"
          width={596*.7}
          height={574*.7}
          quality={35}
          priority
        />  
      </div>          
    </>
  );
}


