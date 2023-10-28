import express from "express";
import router from "./router.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", express.static("./static"));

server.use("/api", router);

server.listen(3000, (error) => {
   if(error) {
      console.log(error);
      return;
   }
   console.log("Server started on port 3000");
})