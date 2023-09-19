import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


export default function index() {

    const router = useRouter();

    

    const [userInfo, setUserInfo] = useState({});


  



    useEffect(() => {

        const id = router.query.idx;

        async function getUserById(id) {

            try {

                const response = await fetch(`https://dummyjson.com/users/${id}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setUserInfo(data);

            }
            catch (error) {
                console.error('Error fetching user data:', error);
            }

        }

        if (id) {
            getUserById(id);
        }


    }, [router.query.idx]);





    return (

        <div>
            <h1> User Information Will be displayed here  </h1>
            <h1> {userInfo?.firstName} {userInfo?.lastName}</h1> 
            <h1> {userInfo?.email}</h1>
        </div>
    )
}
