import { Router } from "express";
import * as rh from "./request-handlers.js";

const router = Router();

router.route("/").get(rh.getData).post(rh.addTodo).delete(rh.deleteTodo).put(rh.editTodo);
router.route("/users/:id").get(middleWare,rh.users)
export default router;

function middleWare(req,res,next){    //in this block we create the function for custome middlware "middleWare"
    let query=req.query;
    console.log(query)
    if(id%2==0 ){        //first time get not passed. becoz the pass not eual to "true"  ie, the condetn is not true
       next();
    }
    else{
       res.json("not passed")
    }
 }