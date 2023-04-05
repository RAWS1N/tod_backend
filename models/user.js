import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now(),
        required : true
    }
})


const userModel = mongoose.model('user',userSchema)
export default userModel