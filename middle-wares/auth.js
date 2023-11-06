import jwt from "jsonwebtoken"
const {verify}=jwt;
export default function authorization(req,res,next){
    try{
        console.log(req.headers)
        let token=req.headers.authorization.split(" ")[1];
        let decodedToken=verify(token,process.env.SECRET_KEY)
        console.log(decodedToken)
        if(decodedToken){
            req.user=decodedToken;
            next()
        }
    }
    catch(error){
        console.log(error)
        return res.status(403).send("unauthorized access")
    }
}