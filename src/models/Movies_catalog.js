import mongoose from "mongoose";

const movies = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true,
    },
    likes:{
        type: Number,
        required: false,
        default: 0
    },
    image:{
        type: String,
        required: true,
    },
    released:{
        type: String,
        required: true
    }
})

export default mongoose.model('Movies_catalog', movies);