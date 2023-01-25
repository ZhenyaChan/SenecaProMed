/*service.js where we will right, the function that wil handle the api request*/
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

/*Things to do */
//get

//update client information

//create order

//get order

//get all order(history)

//get current order


//update order

//delete order
