import Express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";


const app = Express();
app.use(Express.json()) // middleware to use json 

mongoose.connect("mongodb+srv://anuragaffection07:roqsMh2mrM71eQEX@blogmern.6dvaqhd.mongodb.net/", {
    dbName: "MERN_2023_YouTube"
}).then(() => console.log("Mongodb is connected"));





// database schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


// creating model, why ?
// behind the scene it works as class constructors 
export const User = mongoose.model("User", userSchema);


app.use('/api/users', userRouter);

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



