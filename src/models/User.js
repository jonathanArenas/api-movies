import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model('User', userSchema);
