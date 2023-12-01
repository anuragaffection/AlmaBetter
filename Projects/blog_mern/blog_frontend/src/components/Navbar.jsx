import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='left'>
                    <Link to={'/'} className='items'> <h3>Blog - MERN App</h3></Link>
                </div>
                <div className="right">
                    <Link to={'/login'} className='items' ><h3>Login </h3> </Link>
                    <Link to={'/register'} className='items'><h3>Register </h3> </Link>
                    <Link to={'/profile'} className='items'><h3>Profile</h3></Link>
                    <Link to={'/addblog'} className='items'><h3>AddBlog </h3></Link>
                    <div className="items"><h3>Logout</h3> </div>
                </div>
            </div>
        </>
    )
}

export default Navbar