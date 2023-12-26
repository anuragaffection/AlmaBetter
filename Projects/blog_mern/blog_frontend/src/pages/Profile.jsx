import React, { useContext, useEffect } from 'react'
import context from '../context/MyContext';
import axios from 'axios';
import MyBlogs from '../components/MyBlogs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Profile = () => {
  const auth = useContext(context)

  useEffect(() => {
    const fetchUser = async () => {
      const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/users/getmyprofile`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });

      // console.log(api.data.user);
      // setBlog(api.data.blogs)
      auth.setUser(api.data.user)
      auth.setIsAuthenticated(true);
    }

    fetchUser();

  }, [])

  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center">

      <div className=' flex flex-col gap-3 text-yellow-400 font-semibold m-4'>
        <div className='flex flex-row gap-2'> <BiSolidUserCircle /> {" "} {auth.user.name}</div>
        <div className='flex flex-row gap-2'> <MdEmail /> {" "} {auth.user.email}</div>
      </div>

      <div>
        <MyBlogs />
      </div>

    </div>
  )
}

export default Profile