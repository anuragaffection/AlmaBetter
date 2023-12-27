import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import UserDetail from '../components/UserDetail';
import articleApp from '../assets/articleApp.jpg'
import context from '../context/MyContext';

const Home = () => {
  const [blog, setBlog] = useState([]);
  const accessingBlog = useContext(context);

  useEffect(() => {
    const fetchBlog = async () => {
      const api = await axios.get(`https://blog-mern-backend-luce.onrender.com/api/blogs/allblogs`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });

      setBlog(api.data.data)
    }

    fetchBlog();
  }, [])

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
  const titleStyle = `text-yellow-400 text-xl`;
  const dateProfileWrapper = `flex flex-row gap-3`
  const readMoreStyle = `text-lime-600 hover:text-lime-400`;


  return (
    <>
      <div className={container}>
        <div className={wrapper}>
          {
            blog.map((data) => {
              return (
                <div className={dataWrapper} key={data._id} >

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
                  <div className={readMoreStyle}>
                    <Link
                      to={"/viewblog"}
                      onClick={() => {
                        accessingBlog.setSingleBlog(data);
                        scrollToTop()
                      }}
                    >
                      Read More & More
                    </Link>
                  </div>


                </div>
              )
            })
          }
        </div>
      </div >
    </>
  )
}

export default Home