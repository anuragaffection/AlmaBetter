import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddBlog from './pages/AddBlog'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/addblog" element={<AddBlog />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>
  )
}

export default App