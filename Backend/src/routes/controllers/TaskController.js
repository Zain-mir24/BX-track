const Task= require("../../models/TaskSchema")
const AddTask=async(req,res,next)=>{
try{
    console.log(req.body.todos,"boduy")
    let data=req.body.todos
      const addtask= await Task.create(data)
        if(!addtask){
            res.status(500).send(addtask)
        }else{
            res.status(200).send(addtask)
        }
}catch(e){
    console.log(e)
res.status(422).send(e)
}
}
const GetTask=async(req,res,next)=>{
    try{
        const gettask=await Task.find()
        if(!gettask){
            res.status(500).send(gettask)
        }else{
            res.status(200).send(gettask)
        }
        }catch(e){
        res.status(422).send(e)
        }
}
module.exports={AddTask,GetTask}