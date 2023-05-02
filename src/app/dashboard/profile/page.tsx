// import React, { useState, useEffect } from 'react';
// // import { useHistory } from 'react-router-dom';
// import { FiPower, FiTrash2 } from 'react-icons/fi';
// import Image from 'next/image';

// // import api from '../../services/api';

// import './styles.css';
// import Link from 'next/link';

// export default function Profile() {
//   const [incidents, setIncidents] = useState([]);
  
//   // const history = useHistory();

//   const ongId = localStorage.getItem('ongId');
//   const ongName = localStorage.getItem('ongName');

//   useEffect(() => {
//     api.get('profile', {
//       headers: {
//         Authorization: ongId
//       }
//     }).then(response => {
//       setIncidents(response.data)
//     })
//   }, [ongId]);

//   async function handleDeleteIncident(id) {
//     try {
//       await api.delete(`incidents/${id}`, {
//         headers: {
//           Authorization: ongId,
//         }
//       });

//       // Fire Code = Font Ligatures
//       setIncidents(incidents.filter(incidents => incidents.id !== id));
//     } catch (err) {
//       alert('Erro ao deletar caso, tente novamente.');
//     }
//   }

//   function handleLogout() {
//     localStorage.clear();
    
//     // history.push('/');
//   }

//   return (
//     <div className="profile-container">
//       <header>
//         <Image src={'/logo.svg'} alt="Be The Hero" />
//         <span>Bem vinda, {ongName}</span>

//         <Link className="button" href="/incidents/new">Cadastrar novo caso</Link>
//         <button onClick={handleLogout} type="button">
//           <FiPower size={18} color="#E02041" />
//         </button>
//       </header>

//       <h1>Casos cadastrados</h1>

//       <ul>
//         {incidents.map(incident => (
//           <li key={incident.id}>
//             <strong>CASO:</strong>
//             <p>{incident.title}</p>

//             <strong>DESCRIÇÃO:</strong>
//             <p>{incident.description}</p>

//             <strong>Valor:</strong>
//             <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            
//             {/* in onClick I need the parameter to push the id  */}
//             {/* but when I push the parameter I executed the function */}
//             {/* to this thing not happen I just use the arrow function to create a new one */}
//             {/* this way I'm passing to the onClick a function not a return of a function */}
//             <button onClick={() => handleDeleteIncident(incident.id)} type="button">
//               <FiTrash2 size={20} color="#A8A8B3" />
//             </button>
//           </li>
//         ))}        
//       </ul>
//     </div>
//   )
// }


