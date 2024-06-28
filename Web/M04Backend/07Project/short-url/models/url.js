const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true
        },
        redirectUrl: {
            type: String,
            required: true,
        },
        visitHistory: [
            {
                timestamp: { type: Number }
            }
        ],
    },
    { timestamps: true } // timestamps ,  in built in mongoose 
)

const url = mongoose.model('urls', urlSchema);
module.exports = url;