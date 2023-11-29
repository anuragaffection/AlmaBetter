import Express from "express";
import mongoose from "mongoose";


const app = Express();
app.use(Express.json())

mongoose.connect("mongodb+srv://anuragaffection07:roqsMh2mrM71eQEX@blogmern.6dvaqhd.mongodb.net/" , {
    dbName : "MERN_2023_YouTube"
}).then( () => console.log("Mongodb is connected"));


app.get('/', (req, res) => {
    res.json( {
        success : true, 
        message : 'User registered successfully',
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


const User = mongoose.model("User", userSchema);

app.post('/api/users/register', async (req, res) => {
    const {name, email, password} = req.body;

    const user = await User.create({
        name, email, password
    })

    res.json( {
        success : true, 
        message : 'we are in home route',
        suman : 'Web Dev by Suman',
        user
        
    })
})



const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

