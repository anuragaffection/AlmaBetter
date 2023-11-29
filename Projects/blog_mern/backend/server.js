import Express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

// creating instances 
const app = Express();

// middleware to use json
app.use(Express.json())  

mongoose.connect("mongodb+srv://anuragaffection07:roqsMh2mrM71eQEX@blogmern.6dvaqhd.mongodb.net/", {
    dbName: "MERN_2023_YouTube"
}).then(() => console.log("Mongodb is connected"));



app.use('/api/users', userRouter);

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



