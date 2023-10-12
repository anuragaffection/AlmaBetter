
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (

    <div>

      <h1> Welcome to Next Js </h1>


      <Link
        href={'/about'}
      >
        <button className='bg-yellow-500 mx-4'> About us </button>

      </Link>



      <Link href="/about" passHref={true} legacyBehavior>

        <button
          className='bg-yellow-500 mx-4'
        >
          About us Again 
        </button>

      </Link>



    </div>


  )
}
