
import React, { useState } from 'react'
import context from './MyContext'

// it is receiving the props from main.jsx file 
// where we have passed whole app code in authState props 
function AuthState(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState("")
    const [id, setId] = useState("")
    const [singleBlog, setSingleBlog] = useState("");

    return (
        <context.Provider
            value={{
                isAuthenticated,
                user,
                id,
                singleBlog,
                setIsAuthenticated,
                setUser,
                setId,
                setSingleBlog
            }}
        >
            {props.children}
        </context.Provider>
    )
}

export default AuthState



/*
-- props.children   refers to any content passed between the opening and closing tags 
   of the AuthState component when it's used elsewhere in a parent component.

-- check main.jsx file 
*/