import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    ph:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

});
export default mongoose.model.Users || mongoose.model("User",Schema);