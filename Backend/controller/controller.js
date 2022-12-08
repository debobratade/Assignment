const taskModel = require("../models/taskinprogress");

const taskInprogress = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    const create = await taskModel.create(data);
    if (create) return res.status(201).send({ status: true, create });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};


const getData = async(req, res)=>{
    try{

        const data = await taskModel.find()
        if(data)
        return res.status(200).send({status:true, data})

    }catch(err){
        res.status(500).send({message:err.message})
    }
}

module.exports = { taskInprogress, getData };


