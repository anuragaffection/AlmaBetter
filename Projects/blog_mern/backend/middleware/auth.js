import Jwt from "jsonwebtoken";
import { User } from "../models/users.js";

export const isAuthenticated = async (req, res, next) => {

    // cookie 
    // cookies  = in built things 
    const {token} = req.cookies;

    if (!token) return res.status(404).json({
        success: false,
        message: 'Token Not Found'
    })

    const decode = Jwt.verify(token, '!@#$%^&*()+');
    req.user = await User.findById(decode._id);

    next();
}