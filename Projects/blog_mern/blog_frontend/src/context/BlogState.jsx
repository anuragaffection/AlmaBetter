import React, { useState } from 'react'
import context from './MyContext'

function BlogState() {
    const [viewBlog, setViewBlog] = useState("");
    return (
        <context.Provider
            value={ {
                viewBlog,
                setViewBlog
            }}
        >
        </context.Provider>
    )
}

export default BlogState