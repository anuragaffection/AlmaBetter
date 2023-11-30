
import { Blog } from "../models/blogsModel.js";

export const createBlog = async (req, res) => {

    const { title, description, imgUrl } = req.body;

    const blog = await Blog.create({
        title,
        description,
        imgUrl,
        user: req.user
    })

    res.status(201).json({
        success: true,
        message: "Blog Created Successfully",
        user: blog
    })
}


export const myBlogs = async (req, res) => {
   
    const userId = req.user._id;  // _id = coming from mongodb _id 

    // find 
    // findOne 
    // Blog = schema in mongoDB 
    const userBlogs = await Blog.find({ user: userId });

    res.status(200).json({
        success: true,
        data: userBlogs
    })
}


export const updateBlog = async (req, res) => {
    const { title, description, imgUrl } = req.body;

    const id = req.params.id; // taking id from frontend 

    const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({
        success: false,
        message: "Invalid id"
    })

    blog.title = title;
    blog.description = description;
    blog.imgUrl = imgUrl;

    res.json({
        success: true,
        message: "Updating blogs",
        data: blog
    })
}


export const deleteBlog = async (req, res) => {

    const id = req.params.id;

    const blog = await Blog.findById(id); // a single blog matching the id 

    if (!blog) return res.status(404).json({
        success: false,
        message: "Invalid id"
    })

    await blog.deleteOne(); // deleting the blog, after finding throught id 

    res.json({
        success: true,
        message: "Blog Deleted"
    })
}