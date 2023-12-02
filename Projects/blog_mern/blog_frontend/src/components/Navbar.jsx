import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import context from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
import { BiSolidUserCircle } from 'react-icons/bi'
import { BiLogOut } from 'react-icons/bi'


function Navbar() {

    const auth = useContext(context);
    const navigate = useNavigate();

    const logout = async () => {
        const api = await axios.get('https://blog-mern-backend-luce.onrender.com/api/users/logout', {
            headers: {
                "Content-Type": "application/json",
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

        auth.setIsAuthenticated(false);

        setTimeout(() => {
            navigate('/');
        }, 1500);
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

            <div className="navbar">

                <div className='left'>
                    <Link to={'/'} className='items'> <h3>Blog - MERN App</h3></Link>
                </div>

                <div className="right">
                    {
                        (!auth.isAuthenticated) &&
                        <Link to={'/login'} className="items"><h3><BiLogIn /></h3></Link>
                    }
                    {
                        (!auth.isAuthenticated) &&
                        <Link to={'/register'} className="items"><h3>Register</h3></Link>
                    }
                    {
                        (auth.isAuthenticated) &&
                        <Link to={'/addblog'} className="items"><h3>AddBlog</h3></Link>
                    }
                    {
                        (auth.isAuthenticated) &&
                        <Link to={'/profile'} className="items"><h3> <BiSolidUserCircle />
                        </h3></Link>
                    }
                    {
                        (auth.isAuthenticated) &&
                        <div onClick={logout} className="items"><h3> <BiLogOut />
                        </h3></div>
                    }
                </div>

            </div>
        </>
    )
}

export default Navbar