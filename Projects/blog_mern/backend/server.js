import Express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

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
const User = mongoose.model("User", userSchema);


app.use('/', userRouter);



app.post('/api/users/register', async (req, res) => {

    // destructuring , after  recieving from req.body 
    const { name, email, password } = req.body;


    let user = await User.findOne({ email });
    if (user) return res.status(404).json({
        success: false,
        message: "user already exist",
    })

    const hashPassword = await bcrypt.hash(password, 10);

    // updating password  with hashpassword 
    user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    const token = Jwt.sign({ _id: user._id }, '!@#$%^&*()+')

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    }).json({
        success: true,
        message: "user Registered successfully",
        data: user
    })


    // storing in single variable, the whole json 
    // const user = await User.create({
    //     name, email, password
    // })




    /*

    //  returning or responses send 

    res.json( {
        success : true, 
        message : 'User registered successfully',
        suman : 'Web Dev by Suman',
        user 
    })

    */

})



app.post('/api/users/login', async (req, res) => {

    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({
        success: false,
        message: "user do not exist",
    });

    // user.password = comming from db 
    // password = comming from frontend website 
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credential"
        })
    }

    const token = Jwt.sign({ _id: user._id }, '!@#$%^&*()+')

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    }).json({
        success: true,
        message: `${user.name} logined successfully`,
        data: user
    })

})



const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

