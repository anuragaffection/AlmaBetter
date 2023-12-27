import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import context from '../context/MyContext'
import UserDetail from '../components/UserDetail';
import articleApp from '../assets/articleApp.jpg'

function ViewBlog() {
  const accessingBlog = useContext(context);

  const container = `bg-gray-900 text-gray-200 p-4`;
  const wrapper = `flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-7 `;
  const dataWrapper = `flex flex-col gap-4 bg-gray-950 p-9 rounded-lg md:w-3/4`
  const imageWrapper = `border border-gray-700 `;
  const imageStyle = `max-w-full h-48 `;
  const titleStyle = `text-yellow-400 text-xl`;
  const dateProfileWrapper = `flex flex-row gap-3`
  const descriptionStyle = 'whitespace-pre-wrap'
  const readMoreStyle = `text-lime-600 hover:text-lime-400`;



  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={dataWrapper} >
          <div className={imageWrapper}>
            <img
              src={(accessingBlog.singleBlog.imgUrl) ? accessingBlog.singleBlog.imgUrl : articleApp}
              className={imageStyle}
              alt="Image"
            />
          </div>
          <div className={titleStyle}>{accessingBlog.singleBlog.title}</div>
          <div className={dateProfileWrapper}>
            <div> {new Date(accessingBlog.singleBlog.createdAt).toLocaleDateString()}</div>
            <div> <UserDetail id={accessingBlog.singleBlog.user} /></div>
          </div>
          <div className={descriptionStyle}> {accessingBlog.singleBlog.description}</div>
          <div className={readMoreStyle}>
            <Link to={"/"}>Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBlog