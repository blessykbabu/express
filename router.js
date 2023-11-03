import { Router } from "express";
import * as rh from "./request-handlers.js";


const router = Router();

// router.route("/").get(rh.getData).post(rh.addTodo).delete(rh.deleteTodo).put(rh.editTodo);
router.route("/").post(rh.setData)
router.route("/get-data").get(rh.getData)
router.route("/get-data2").get(rh.getData2)
router.route("/update-data").put(rh.updateData)
router.route("/update-data2").put(rh.updateData2)
router.route("/delete-data").delete(rh.deleteData)
router.route("/users/:id").get(middleWare,rh.users)
export default router;

function middleWare(req,res,next){    //in this block we create the function for custome middlware "middleWare"
    let id=req.params.id;
    console.log(id)

    if(id %2 == 0 ){        //first time get not passed. becoz the pass not eual to "true"  ie, the condetn is not true
       next();
    }
    else{
       res.json("not passed")
    }
 }