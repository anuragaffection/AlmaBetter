import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import UserDetail from './UserDetail'
import context from '../context/MyContext';
import articleApp from '../assets/articleApp.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function MyBlogs() {

    const [blog, setBlog] = useState([]); //empty array
    const auth = useContext(context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/blogs/myblogs`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            setBlog(api.data.data);
        }
        fetchBlog();
    }, []);


    const deleteBlog = async (id) => {
        const api = await axios.delete(`https://blog-mern-backend-luce.onrender.com/api/blogs/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
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
    }


    const editBlog = async (id) => {
        auth.setId(id);
        navigate('/addblog')
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };


    const container = `bg-gray-900 text-gray-200 p-4`;
    const wrapper = `flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-7 `;
    const dataWrapper = `flex flex-col gap-4 bg-gray-950 p-9 rounded-lg md:w-5/12`
    const imageWrapper = `border border-gray-700 `;
    const imageStyle = `max-w-full h-48 `;
    const titleStyle = `text-yellow-400 text-2xl font-semibold`;
    const dateProfileWrapper = `flex flex-row gap-3`
    const buttonWrapper = 'flex flex-row gap-6 justify-center text-gray-900 font-semibold'
    const editButton = `bg-rose-700 hover:bg-rose-500 h-12 px-5 rounded-lg`;
    const viewButton = 'bg-lime-500 hover:bg-lime-400 h-12 px-5 rounded-lg';
    const deleteButton = 'bg-red-700 hover:bg-red-500 h-12 px-5 rounded-lg'

    return (
        <>
            <div className={container}>
                <div className={wrapper}>
                    {
                        blog && blog.map((data) => {
                            return (
                                <div className={dataWrapper} key={data._id}>
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

                                    <div className={imageWrapper}>
                                        <img
                                            src={(data.imgUrl) ? data.imgUrl : articleApp}
                                            className={imageStyle}
                                            alt="Image"
                                        />
                                    </div>


                                    <div className={titleStyle}>{data.title}</div>

                                    <div className={dateProfileWrapper}>
                                        <div> {new Date(data.createdAt).toLocaleDateString()}</div>
                                        <div> <UserDetail id={data.user} /></div>
                                    </div>

                                    <div>
                                        {
                                            data.description.length > 250
                                                ? `${data.description.substring(0, 251)}...`
                                                : data.description
                                        }
                                    </div>

                                    <div className={buttonWrapper}>
                                        <button className={viewButton}>
                                            <Link
                                                to={"/viewblog"}
                                                onClick={() => {
                                                    auth.setSingleBlog(data);
                                                    scrollToTop();
                                                }}
                                            >
                                                View
                                            </Link>
                                        </button>
                                        <button
                                            onClick={() => editBlog(data._id)}
                                            className={editButton}>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteBlog(data._id)}
                                            className={deleteButton}>
                                            Delete
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div >
            </div>
        </>
    )
}

export default MyBlogs