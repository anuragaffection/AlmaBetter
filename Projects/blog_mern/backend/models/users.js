import mongoose from "mongoose";

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