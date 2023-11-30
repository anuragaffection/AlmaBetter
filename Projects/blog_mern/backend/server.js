import Express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";
import cors from "cors";


dotenv.config(); // using dotenv 
const app = Express(); // instances  

mongoose.connect( process.env.MONGODB_URL, { // connecting mongodb 
    dbName: "MERN_2023_YouTube"
}).then(() => console.log("Mongodb is connected"));



app.use(Express.json())  // middleware to use json
app.use(cookieParser()) // middleware for cookie parser 
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods :["GET", "POST", "PUT", "DELETE"],
    credentials : true
}))


app.use('/api/users', userRouter); // routing 
app.use('/api/blogs', blogRouter); // routing 

const port = process.env.PORT; 
app.listen(port, () => console.log(`Server is running on port ${port}`));


