import Express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import blogRouter from "./routes/blogRoute.js"


const app = Express();  // creating instances 

app.use(Express.json())  // middleware to use json
app.use(cookieParser()) // middleware for cookiew parser 

// connecting mongodb 
mongoose.connect("mongodb+srv://anuragaffection07:roqsMh2mrM71eQEX@blogmern.6dvaqhd.mongodb.net/", {
    dbName: "MERN_2023_YouTube"
}).then(() => console.log("Mongodb is connected"));


app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);


const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


