import React, { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import context from '../context/AuthContext';

function Register() {

  const auth = useContext(context);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const api = await axios.post(`https://blog-mern-backend-luce.onrender.com/api/users/register`,
        {
          name,
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );

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

      auth.setIsAuthenticated(true)


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

      <div className="container">

        <div className="d-flex flex-column">

          <h1 className='text-center my-4'>Login User  </h1>

          <form onSubmit={handleSubmit} className=" d-flex flex-column gap-4">

            <div className="form-group">
              <label htmlFor="exampleInputName">Name </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="textHelp"
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

          </form>

        </div>

      </div>

    </>
  )
}

export default Register