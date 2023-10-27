import express from "express";

import router from "./router.js";
const server=express()

server.use(express.json())
server.use(express.urlencoded({
    extended:true
}))
server.use("/",express.static("./static"))
server.use("/api",router)

// server.get("/api",(req,res)=>{
//     console.log(req.query)
//     res.json("hello")
// })

// server.post("/api",(req,res)=>{
//     console.log(req.body);
//     res.json("post api");

// })
// server.put("/api",(req,res)=>{
//     console.log(req.body);
//     res.json("post api");

// }
// )

server.listen(3000,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server start on port 3000")

})
