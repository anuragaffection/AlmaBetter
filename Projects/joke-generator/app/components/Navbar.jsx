import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (

        <header class="text-gray-400 bg-gray-900 body-font">

            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                 
                    <span class="ml-3 text-xl">Joke Generator </span>

                </a>


                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href='/' class="mr-5 hover:text-white">Home </Link>
                    <Link href='/joke' class="mr-5 hover:text-white">Jokes  </Link>
                    <Link href='/about' class="mr-5 hover:text-white">About </Link>
                    <Link href='/contact' class="mr-5 hover:text-white">Contact </Link>
                </nav>



            </div>
        </header>

    )
}
