import Link from 'next/link'; // link  is also used to do dynamic routing 
import React, { useEffect, useState } from 'react'



export default function index() {

    const [family, setFamily] = useState([]);


    useEffect(() => {

        async function fetchUsers() {
            const data = await fetch('https://dummyjson.com/users');
            setFamily(await data.json());
        }

        fetchUsers() // calling the function 

    }, []);







    return (

        <div className='m-4 p-4'>

            <h1>All family Members </h1>


            {
                // conditional rendering 

                // here, 
                // users   = coming from api 
                // oneUser =  


                family &&
                family.users &&
                family.users.map(oneUser =>
                    <Link
                        href={`/family/${oneUser.id}`}
                        key={oneUser.id}
                    >
                        <li>{oneUser.firstName}</li>
                    </Link>
                )
            }


        </div>

    )
}
