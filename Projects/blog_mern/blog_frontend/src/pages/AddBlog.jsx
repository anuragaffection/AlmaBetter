import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import context from '../context/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddBlog() {

  const auth = useContext(context);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {

    const fetchBlog = async () => {
      const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/blogs/blog/${auth.id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });

      setTitle(api.data.blog.title)//check again
      setDescription(api.data.blog.description)
      setImgUrl(api.data.blog.imgUrl);
    }

    fetchBlog();
  }, [auth.id])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.id) {
      try {
        const api = await axios.post(`https://blog-mern-backend-luce.onrender.com/api/blogs/new`, {
          title,
          description,
          imgUrl
        },
          {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true,
          });

        // console.log(api);
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

      } catch (error) {
        // console.error(error)
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

    } else {
      try {
        const api = await axios.put(`https://blog-mern-backend-luce.onrender.com/api/blogs/${auth.id}`, {
          title,
          description,
          imgUrl
        },
          {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true,
          });

        // console.log(api);
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

        auth.setId("");

      } catch (error) {
        // console.error(error)
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
  }

  const container = `bg-gray-900 text-gray-200 p-4`;
  const wrapper = `flex flex-col gap-7 md:justify-center md:items-center my-3`;
  const titleStyle = `text-center text-yellow-400 text-2xl font-semibold`;
  const addBlogForm = `flex flex-col gap-6 bg-gray-950 p-9 rounded-lg md:w-3/4`;
  const labelInputWrapper = 'flex flex-col gap-2'
  const labelStyle = 'font-semibold ml-2'
  const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`;
  const inputStyleTextArea = 'bg-gray-700 p-3 rounded-lg'
  const addBlogButton = `text-gray-900 h-12 rounded-lg bg-lime-500 hover:bg-lime-400`

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
          <div>
            {
              (auth.id) ? (
                <h1 className={titleStyle}>Update Blog</h1>) : (
                <h1 className={titleStyle}>Add Blog</h1>
              )
            }
          </div>

          <form onSubmit={handleSubmit} className={addBlogForm}>
            <div className={labelInputWrapper}>
              <label htmlFor="titleText" className={labelStyle}>Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                className={inputStyle} 
                id="titleText"
              />
            </div>

            <div className={labelInputWrapper}>
              <label htmlFor="imageUrl" className={labelStyle}> Image Url</label>
              <input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                type="text" 
                className={inputStyle} 
                id="imageUrl"
              />
            </div>

            <div className={labelInputWrapper}>
              <label htmlFor="descriptionText" className={labelStyle}>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id='descriptionText'
                className={inputStyleTextArea}
                rows={12}
                cols={50}
                placeholder='Message'
              >
              </textarea>
            </div>

            <div className={labelInputWrapper}>
              {
                (auth.id) ? (
                  <button type="submit" className={addBlogButton}>Update Blog</button>

                ) : (
                  <button type="submit" className={addBlogButton}>Add Blog</button>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBlog