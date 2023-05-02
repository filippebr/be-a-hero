'use client'

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// import api from '../../services/api';

import Image from 'next/image';
import Link from 'next/link';

export default function Logon() {
  const [id, setId] = useState('');
  // const history = useHistory();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      // localStorage.setItem('ongName', response.data.name);

      // history.push('/profile');
    } catch (err) {
      alert("Falha no Login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <Image src={'/logo.svg'} width={50} height={50} alt="Be The Hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            placeholder="Sua ID" 
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" href="/register">
            <FiLogIn size="16" color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <Image src={'/heroes.png'} width={500} height={500} alt="Heroes"/>
    </div>
  );
}


