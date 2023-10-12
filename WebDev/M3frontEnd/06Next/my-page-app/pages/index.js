
import { Inter } from 'next/font/google'

import {signIn, signOut, useSession} from 'next-auth/react'




const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const session = useSession();

  // console.log(session); = to check what it provide 



  if (session.data === null){
    return <button onClick={signIn} className='bg-green-700'>Login </button>
  }







  return (

    <main>
      <h1>Welcome to next js sesssion </h1>
      <h1>Authentication </h1>
      <h1>Welcome {session?.data?.user?.name}</h1>
      <button onClick={signOut} className='bg-red-700'>Sign Out </button>

    </main>
    
  )
}
