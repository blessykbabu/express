import mongoose from "mongoose"
const Schema=new mongoose.Schema({
    username:{
        type:String
    },
    password:{
type:String
    }
})
export default mongoose.Logins ||  mongoose.model("Login",Schema);