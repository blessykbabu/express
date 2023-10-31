import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    }
});
export default mongoose.model.Users || mongoose.model("User",Schema);