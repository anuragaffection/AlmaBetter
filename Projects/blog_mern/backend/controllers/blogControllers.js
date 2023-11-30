
import { Blog } from "../models/blogsModel.js";

export const createBlog = async (req, res) => {

    const {title, description, imgUrl} = req.body ;

    await Blog.create({
        title,
        description,
        imgUrl,
        user : req.user
    })

    res.status(201).json({
        success : true,
        message : "Blog Created Successfully"
    })
}


export const myBlogs = (req, res) => {
    res.json({
        success : true
    })
}


export const updateBlog = (req, res) => {
    res.json({
        success : true
    })
}

export const deleteBlog = (req, res) => {
    res.json({
        success : true
    })
}