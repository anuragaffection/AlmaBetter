
import React, { useState } from 'react'
import context from './AuthContext'

function AuthState() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState("")
    const [id, setId] = useState("")

    return (
        <context.Provider
            value={{
                isAuthenticated,
                user,
                id,
                setIsAuthenticated,
                setUser,
                setId
            }}
        >
            {props.children}
        </context.Provider>
    )
}

export default AuthState