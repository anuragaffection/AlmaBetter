import Link from 'next/link';
import React from 'react'
import useSWR from 'swr';



const myDataFetcher = (...args) => {
    return fetch(...args).then((response) => {
        return response.json();
    });
};



export default function Index() {

    const { data, error } = useSWR('https://dummyjson.com/users', myDataFetcher);


    if (error) {
        return (
            <div>
                <h1> Error occured </h1>
            </div>
        )

    }

    if (!data) {
        return <>
            Loading...
        </>
    }


    return (


        <div>

            <h1>All family Memebers - Fam SWR </h1>
            <h1>We are going to use = swr = for data fetching </h1>
            <h1>Swr = provide by default caching </h1>


            <div>
                {/* users = coming from api  */}
                {
                    data &&
                    data.users &&
                    data.users.map((user) => (
                        <Link
                            href={`/famswr/${user.id}`}
                            key={user.id}
                        >
                            <li>{user?.firstName}</li>
                        </Link>
                    ))
                }
            </div>


        </div>
    )
}
