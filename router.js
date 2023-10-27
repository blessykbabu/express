import {Router} from "express";
import * as rh from "./request-handlers.js"
const router =Router();
router.route("/").get(rh.setData)
router.route("/get-data").post(rh.getDatails)
// router.route("/edit").put(rh.editdetails)
export default router;