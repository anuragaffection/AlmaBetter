import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
import { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter( [
//   {
//     path: '/',
//     element : <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "",
//         element: <About/>
//       },
//     ]
//   }
// ])
// multiple element , so take an array 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route path='user/:userid' element={<User />} /> 
      {/* here, we are doing dynamic routing  */}

      <Route loader={githubInfoLoader} path='github' element={<Github />} />
      {/* we can call api , at loader, it use caching &  */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
