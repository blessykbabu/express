import express from "express";
const server=express()
server.use("/",express.static("./static"))
server.get("/set-todo",express.static("./data."),(req,res)=>{
    if(error){
        console.log(error);
        return;
    }
    let list=data ==="" ? [] : JSON.parse(data);
        list.push(query);
})
server.get("/api",(req,res)=>{
    console.log(req.query)
    res.json("hello")
})
server.listen(3000,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server start on port 3000")

})