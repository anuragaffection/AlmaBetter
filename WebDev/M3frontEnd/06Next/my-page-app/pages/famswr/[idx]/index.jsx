import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr';





const myInfoFetcher = (...args) => {
    return fetch(...args).then((response) => {
        return response.json();
    });
};




/*

 const myInfoFetcher = async (...args) => {

     const response = await fetch(...args);

     return await response.json();
 };

 
this is also a way to fetch data

*/




export default function Index() {

    const router = useRouter();

    const id = router?.query.idx;

    const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, myInfoFetcher);


    if (error) {
        return <h1> Error Occurred </h1>
    }

    if (!data) {
        return <h1>Loading ... </h1>
    }


    return (

        <div>
            <h1>Infomation of Each User </h1>


            <h1>{data.firstName}</h1>
            <h1>{data.email}</h1>
            <h1>{data.university}</h1>

        </div>
    )
}
