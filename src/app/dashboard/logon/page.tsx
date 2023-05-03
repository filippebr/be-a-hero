'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLogIn } from 'react-icons/fi';

import api from '../../api/services/axiosClient';

import Image from 'next/image';
import Link from 'next/link';

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
      <div className="h-screen grid bg-gray-50 items-center justify-center px-4 sm:px-4 lg:px-6" >
        <section className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-1">
            <Image 
              className="mx-auto h-14 w-auto"
              src={'/logo.svg'} 
              width={100} 
              height={100} 
              alt="Be The Hero"
            />
          </div>          
          <form onSubmit={handleLogin}>
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
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Link className="flex text-md items-center text-gray-900 hover:text-gray-500 font-medium" href="/register">
                <FiLogIn className="mr-2 text-xl text-red-500" />
                Não tenho cadastro
              </Link>

              {/* <div className="text-md items-center text-gray-900 hover:text-gray-500">
                <a href="#" className="font-medium">
                  Esqueci o password
                </a>
              </div> */}

            </div>
            
          </form>
        </section>
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

