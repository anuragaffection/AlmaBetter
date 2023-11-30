import Express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createBlog, myBlogs, updateBlog, deleteBlog } from "../controllers/blogControllers.js";

const router = Express.Router();

router.post('/new', isAuthenticated, createBlog);
router.get('/myBlogs', isAuthenticated, myBlogs);
router.put('/:id', isAuthenticated, updateBlog);
router.delete('/:id', isAuthenticated, deleteBlog);


export default router;