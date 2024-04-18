const users = require("../Models/userModel")


//get all details
exports.getAllDetails = async (req,res)=>{
    try{
const allDetails = await users.find()
res.status(200).json(allDetails)
    }catch(err){
       res.status(401).json(err)
    }
}