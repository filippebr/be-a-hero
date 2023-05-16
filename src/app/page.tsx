import { Inter } from 'next/font/google';
import { prisma } from '../lib/prisma';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await fetch("https://api.github.com/users/filippebr");
  const incidents = await prisma.incident.findMany();
  
  const data = incidents.map((incident) => {
    return {
      id: incident.id,
      title: incident.title,
      description: incident.description,
      value: incident.value
    }
  })

  const user = await response.json();

  return (
    <div>
      <h1>Home Page</h1>
      <pre>
        {JSON.stringify(user.url, null, 2)}        
      </pre>
      <ul>
        {data.map(incident => <li key={incident.id}>{incident.title}</li>)}
      </ul>

    </div>
  )
}
