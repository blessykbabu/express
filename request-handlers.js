export function setData(req,res){
    try{
        console.log(req.query);
        res.json("GET API")

    }catch(error){
        console.log(error)
        res.JSON("ERROR")
    }
}
export function getDatails(req,res){
    try{
        console.log(req.query.todolist);
        res.json("post api")

    }catch(error){
        console.log(error)
        res.JSON("ERROR")
    }
}

