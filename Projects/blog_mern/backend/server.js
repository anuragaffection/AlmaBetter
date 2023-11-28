import Express from "express";
import mongoose from "mongoose";

const app = Express();
mongoose.connect("mongodb+srv://anuragaffection07:roqsMh2mrM71eQEX@blogmern.6dvaqhd.mongodb.net/" , {
    dbName : "MERN_2023_YouTube"
}).then( () => console.log("Mongodb is connected"));


app.get('/', (req, res) => {
    res.json( {
        success : true, 
        message : 'we are in home route',
        suman : 'Web Dev by Suman'
    })
})


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
})


const user = mongoose.model("User", userSchema);

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

