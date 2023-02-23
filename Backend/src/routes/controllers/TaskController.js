const Task= require("../../models/TaskSchema")
const AddTask=async(req,res,next)=>{
let data=req.body
console.log(data)
try{  
    let check;
    for (let i = 0; i < data.length; i++) {
        const { _id, ...update } = data[i];
        if(!_id){
        check=await Task.create(data[i])
        }else{
            check= await Task.findByIdAndUpdate({_id:data[i]._id}, update,{upsert:true});
        }
      }
        if(!check){
            res.status(500).send(check)
        }else{
            res.status(200).send(check)
        }   
   
}catch(error){
    console.log(error)
   res.status(422).send( error)

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