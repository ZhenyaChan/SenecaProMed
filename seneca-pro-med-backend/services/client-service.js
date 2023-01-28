/*service.js write functions that wil handle the api request*/
const clientModel = require("../models/client-model");


//creating new user
exports.createClient = (req, res)=>{
    const clientUser = new clientModel(req.body);
    clientUser.save().then((newClientUser)=>{
        res.json({
            message: "client user is created",
            data : newClientUser
        })
    })
    .catch(err=>{
        console.log(`error ${err}`);
    });
};

exports.getAllClients = (req, res)=>{
    clientModel.find().then(clientsData => {
        if(clientsData.length > 0){
            res.json({
               message: ["All client users", clientsData.length],
               data: clientsData
            })
        }
    })
}

exports.getClientById = (req, res) => {
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

/*Things to do */
//get

//update client information

//create order

//get order

//get all order(history)

//get current order

//update order

//delete order