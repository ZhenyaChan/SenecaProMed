const driverModel = require("../models/driver-model");
const bcrypt = require('bcryptjs');
/*
    To Do:
        - CREATE (POST)  [Done] 
        - DELETE         [Done]
        - UPDATE (PUT)   [Done]
        - GET
            -> Get All   [Done]
            -> Get By ID [Done]
*/

// Creating new driver user
exports.createDriver = (req, res) => {
    let salt = bcrypt.genSaltSync(10); //password encription 
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    req.body.userName = req.body.email;
    

    driverModel.find({"userName": req.body.email}).then((userDB)=>{ 
        if(userDB.length > 0){
            res.json({
                message: "Username is already in DB",
            })
        }else {
            const driverUser = new driverModel(req.body);
            driverUser.save()
            .then((newUser)=>{
                res.json({
                    message: "client user is created",
                    data : newUser
                })
            })
            .catch(err=>{
                console.log(`error ${err}`);
            });
        }
    });
};

// Deleting a driver user
exports.deleteDriver = (req, res) => {
    driverModel.findByIdAndRemove(req.params.id).then(() => {
        res.json({
            message: `Driver with ID (${req.params.id}) has been deleted successfully`
        });
    }).catch(err => {
        res.status(500).json ({
            message: err
        });
    });
}

// Updating driver user
exports.updateDriver = (req, res) => { 
    driverModel.findByIdAndUpdate(req.params.id, req.body, {new: true }).then(driver => {
        // If driver is found
        if (driver) {
            res.json({
                message: `Driver with ID (${req.params.id}) has been updated successfully`,
                data: driver
            })
        }
        // If driver is not found
        else {
            res.status(404).json ({
                message: `Driver with ID (${req.params.id}) is NOT found`
            })
        }
    }).catch(err => {
        res.status(500).json ({
            message: err
        });
    });
};

// GET all driver users
exports.getAllDrivers = (req, res) => {
    driverModel.find().then(driverData => {
        res.json({
            message: `Driver data successfully found (total of ${driverData.length} data)`,
            data: driverData
        })
    }).catch (err => {
        console.log(`Error: ${err}`);
    });
};

// GET a specific driver (using ID)
exports.getDriverById = (req, res) => {
    driverModel.findById(req.params.id).then(driverData => {
        res.json({
            message: `Data of a driver with ID (${req.params.id}) successfully found`,
            data: driverData
        })
    }).catch (err => {
        res.status(404).json ({
            message: `There are no drivers with an ID of ${req.params.id} `
        })
    });
};