import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ArticleApp from '../assets/articleApp.jpg'
import context from '../context/AuthContext'
import { Social } from '../constant/social'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

    const navbarContainer = `flex justify-between bg-black text-lime-500 text-lg w-full flex-col md:flex-row p-1 gap-2 sticky top-0`;
    const logo = ` text-xl font-semibold text-yellow-400`;
    const logoImg = 'rounded-full'
    const logoWrapper = `flex justify-center items-center gap-2 ml-4 mt-2 md:mt-0`
    const nav = `flex justify-center items-center list-none gap-4 md:gap-8 mr-0 md:mr-4 xl:mr-8 mb-2 md:mb-0 mt-2 md:mt-0`;
    const navLink = `hover:text-lime-300 md:text-xl text-lg font-semibold`;

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

            <div className={navbarContainer}>
                <Link to={'/'}>
                    <div className={logoWrapper}>
                        <img
                            className={logoImg}
                            src={ArticleApp}
                            alt="Logo"
                            height={'40px'}
                            width={'40px'}
                        />
                        <div className={logo}>{Social.title}</div>
                    </div>
                </Link>

                <div className={nav}>
                    {
                        (!auth.isAuthenticated) &&
                        <Link to={'/login'}><li className={navLink}>Login </li></Link>
                    }
                    {
                        (!auth.isAuthenticated) &&
                        <Link to={'/register'}><li className={navLink}>Register </li></Link>
                    }
                    {
                        (auth.isAuthenticated) &&
                        <Link to={'/addblog'}><li className={navLink}>AddBlog </li></Link>
                    }
                    {
                        (auth.isAuthenticated) &&
                        <Link to={'/profile'}><li className={navLink}>Profile </li></Link>
                    }
                    {
                        (auth.isAuthenticated) &&
                        <li className={navLink} onClick={logout}>Logout </li>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar