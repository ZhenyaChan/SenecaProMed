/*service.js write functions that wil handle the api request*/
const clientModel = require("../models/client-model");
const bcrypt = require('bcryptjs');

//creating new user
exports.createClient = (req, res)=>{
    let salt = bcrypt.genSaltSync(10); //password encription 
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    req.body.userName = req.body.email;
    
    const clientUser = new clientModel(req.body);
    clientUser.save()
    .then((newClientUser)=>{
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

exports.updateClientById = (req, res) => { 
    clientModel.findByIdAndUpdate(req.params.id, req.body, {new: true }).then(client => {
        if (client) {
            res.json({
                message: `Client with ID (${req.params.id}) has been updated successfully`,
                data: client
            })
        }
        else {
            res.status(404).json ({
                message: `Client with ID (${req.params.id}) is NOT found`
            })
        }
    }).catch(err => {
        res.status(500).json ({
            message: err
        });
    });
};

/*Things to do */

//create order

//get order

//get all order(history)

//get current order

//update order

//delete order