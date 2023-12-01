import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';


const UserDetail = ({id}) => {

    const [user, setUser] = useState({})

    useEffect(() => {

        const fetchUser = async () => {
            const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/users/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            setUser(api.data.data)
        }

        fetchUser();

    }, [])


    return (
        <>
            <h3> <BiSolidUserCircle /> {" "} {user.name}</h3>
            <h3> <MdEmail />{" "} {user.email}</h3>
        </>
    )
}

export default UserDetail