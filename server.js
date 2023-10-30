import express from "express";
import router from "./router.js";
import morgan from "morgan";

const server = express();

server.use(express.json());    //express is middle ware
server.use(express.urlencoded({ extended: true }));
server.use(morgan("tiny"));       //----------------> we give these middleware in router.js
// server.use(middleWare)// these "middleWare is a custome middleware"
server.use("/", express.static("./static"));

server.use("/api", router);

server.listen(3000, (error) => {
   if(error) {
      console.log(error);
      return;
   }
   console.log("Server started on port 3000");
})

// function middleWare(req,res,next){    //in this block we create the function for custome middlware "middleWare"
//    let query=req.query;
//    if(query.pass=="true"){        //first time get not passed. becoz the pass not eual to "true"  ie, the condetn is not true
//       next();
//    }
//    else{
//       res.json("not passed")
//    }
// }