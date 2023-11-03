// import fs from "fs";

// const dataFilePath = "./data.json";

// function readDataFile() {
//     try {
//         const data = fs.readFileSync(dataFilePath, "utf-8");
//         return JSON.parse(data);
//     } catch (error) {
//         return [];
//     }
// }

// function writeDataFile(data) {
//     fs.writeFileSync(dataFilePath, JSON.stringify(data));
// }

// export function getData(req, res) {
//     const todoList = readDataFile();
//     res.json(todoList);
// }

// export function addTodo(req, res) {
//     const { todo } = req.body;
//     const todoList = readDataFile();
//     todoList.push(todo);
//     writeDataFile(todoList);
//     res.json({ message: "Todo added successfully" });
// }

// export function deleteTodo(req, res) {
//     const { todo } = req.query;
//     const todoList = readDataFile();
//     const index = todoList.indexOf(todo);
//     if (index !== -1) {
//         todoList.splice(index, 1);
//         writeDataFile(todoList);
//         res.json({ message: "Todo deleted successfully" });
//     } else {
//         res.status(404).json({ message: "Todo not found" });
//     }
// }

// export function editTodo(req, res) {
//     const oldTodo = req.query.oldTodo;
//     const newTodo = req.query.newTodo;
//     const todoList = readDataFile();
//     const index = todoList.indexOf(oldTodo);
//     if (index !== -1) {
//         todoList[index] = newTodo;
//         writeDataFile(todoList);
//         res.json({ message: "Todo updated successfully" });
//     } else {
//         res.status(404).json({ message: "Todo not found" });
//     }
// }
import userSchema from "./schemas/user.schema.js";
import UserSchema from  "./schemas/user.schema.js"
export async function setData(req,res){
    try{
       let {id,name,fname,lname,ph,password,email}=req.body;
       let result=await UserSchema.create({id,name,fname,lname,ph,password,email})
       console.log(result)
        res.status(200).send("result")
    }
    catch(error){
        console.log(error)
        res.json("error")
    }

}

export async function getData(req,res){
    try{
             let data=await UserSchema.find();
             console.log(data)
             res.json(data)
    }
    catch(error){
        res.status(500).send("some error")

    }
}





export async function getData2(req,res){
    try{
        let {id}=req.query;
             let data=await UserSchema.findOne({id:id});
            //  console.log(data)
             res.json(data)
    }
    catch(error){
        res.status(500).send("some error")

    }
}


export async function updateData(req,res){
    try {
        let {id}=req.query;  //here destructuring id 
        let data=req.body;  //these for update details ie, new data
        let result=await userSchema.updateOne({_id:id},data)
        res.json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("some error occcured")
    }
}

export async function updateData2(req,res){
    try {
        let {id}=req.query;  //here destructuring id 
        let data=req.body;  //these for update details ie, new data
        let result=await userSchema.updateOne({_id:id},data)
        res.json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("some error occcured")
    }
}


export async function  deleteData(req,res){
    try {
        let {id}=req.query;
        let result=await userSchema.deleteOne({_id:id});
        res.json(result)
    } catch (error) {
      console.log(error) 
      res.json("some error") 
    }
}
                                //   the following code for get id of a user
export function users(req,res){                      
    try{
        let id=req.params;    //get parameters---params used for
        console.log(id);
        console.log(req.query);
        res.status(200).send("userdata")
    }
    catch(error){
        console.log(error)
        res.json("error")
    }

}