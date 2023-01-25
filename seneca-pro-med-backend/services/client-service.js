
const clientModel = require("../models/client-model");

//for Post
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

<<<<<<< Updated upstream
=======
/*Things to do */
//get

//update client information

//create order

//get order

//get all order(history)

//get current order

//update order

//delete order
>>>>>>> Stashed changes
