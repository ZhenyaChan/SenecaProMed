

const clientModel = require("../models/client-model");


exports.getAllClientUsers = (req,res)=>{
    clientModel.find().then(clientsData => {
        if(clientsData.length > 0){
            res.json({
               message: ["All client users", clientsData.length],
               data: clientsData
            })
        }
    })
}

exports.getAClient = (req,res) =>{ 
    clientModel.findById (req.params.id).then(client =>{
        if(client){
            res.json({
                message: `users with the id${req.params.id}`,
                data:client
            })
        }else{
            res.status(404).json({
                message:`there is not client with the id${req.params.id}`
            })
        }
    }).catch(error=>{
        if(error.name==="CastError" && error.kind==="ObjectId"){
            res.status(404).json({
                message: `There is no user in our database with the id${req.params.id}`
            })
        }else{
            res.status(500).json({
                message: error
            })
        }
    })
}