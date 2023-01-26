const driverModel = require("../models/driver-model");

// Creating new driver
exports.createDriver = (req, res)=>{
    const driverUser = new driverModel(req.body);
    driverUser.save().then((newDriverUser)=>{
        res.json({
            message: "Driver user is created",
            data : newDriverUser
        })
    })
    .catch(err=>{
        console.log(`Error: ${err}`);
    });
};