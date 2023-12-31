import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserDetail = ({id}) => {
    const [oneUser, setOneUser] = useState({}) // storing object 
    useEffect(() => {
        const fetchUser = async () => {
            const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/users/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            setOneUser(api.data.data)
        }
        fetchUser();
    }, [])


    return (
        <>
            <h3> {oneUser.name}</h3>
        </>
    )
}

export default UserDetail