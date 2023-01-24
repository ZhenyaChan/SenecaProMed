const clientModel = require("../users-models/client-model");


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