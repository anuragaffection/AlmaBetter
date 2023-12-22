import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import context from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

  const auth = useContext(context);
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const api = await axios.post(`https://blog-mern-backend-luce.onrender.com/api/users/login`, {
        email,
        password
      },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        });

      toast.success(api.data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      auth.setIsAuthenticated(true);

      setTimeout(() => {
        navigate('/profile')
      }, 1500);


    }
    catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      auth.setIsAuthenticated(false);
    }
  }

  const container = `bg-gray-900 text-gray-200 p-4`;
  const wrapper = `flex flex-col gap-7 md:justify-center md:items-center my-3`;
  const title = `text-center text-yellow-400 text-2xl font-semibold`;
  const loginForm = `flex flex-col gap-6 bg-gray-950 p-9 rounded-lg md:w-3/4`;
  const labelInputWrapper = 'flex flex-col gap-2'
  const labelStyle = 'font-semibold ml-2'
  const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`;
  const submitButton = `text-gray-900 h-12 rounded-lg bg-lime-500 hover:bg-lime-400`

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className={container}>
        <div className={wrapper}>
          <h1 className={title}>Login Here</h1>

         

         
          <form onSubmit={handleSubmit} className={loginForm}>

            <div className={labelInputWrapper}>
              <label
                htmlFor="exampleInputEmail"
                className={labelStyle}>
                Enter Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className={inputStyle}
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className={labelInputWrapper}>
              <label
                htmlFor="exampleInputPassword"
                className={labelStyle}>
                Enter Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={inputStyle}
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>

            <button className={submitButton}>Submit</button>
          </form>

        </div>
      </div>

    </>
  )
}

export default Login

