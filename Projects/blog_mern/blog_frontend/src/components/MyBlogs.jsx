import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import UserDetail from './UserDetail'
import context from '../context/AuthContext';

function MyBlogs() {

    const [blog, setBlog] = useState([]);
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

        const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/blogs/${id}`, {
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
        navigate('./addblog')
    }



    return (
        <>
            <div className="container text-center my-5" style={{ width: '56%' }}>

                {
                    blog && blog.map((data) => {

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

                                <div
                                    className='card mb-3 bg-secondary text-light my-5'
                                    style={{ maxWidth: '760px' }}
                                >
                                    <div className='row g-0'>
                                        <div className='col-md-4'
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img src={data.imgUrl} className='img-fluid rounded-start' alt="" />
                                        </div>

                                        <div className='col-md-8'>
                                            <div className='card-body'>
                                                <h2 className='card-title'>{data.title} </h2>
                                                <p className='card-text'>{data.description} </p>
                                                <p className='card-text'> {data.createdAt} </p>
                                                <UserDetail id={data.user} />

                                                <button onClick={() => editBlog(data._id)} className='btn btn-warning mx-2'>Edit</button>
                                                <button onClick={() => deleteBlog(data._id)} className='btn btn-danger mx-5'>Delete</button>

                                            </div>

                                        </div>
                                    </div>
                                </div >
                            </>
                        )
                    })
                }
            </div >
        </>
    )
}

export default MyBlogs