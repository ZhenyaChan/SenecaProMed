

const clientModel = require("../models/client-model");
const adminModel = require("../models/admin-model");

//creating new user
exports.createAdmin = (req, res)=>{
    const adminUser = new adminModel(req.body);
    adminUser.save().then((newAdminUser)=>{
        res.json({
            message: "Admin user is created",
            data : newAdminUser
        })
    })
    .catch(err=>{
        console.log(`error ${err}`);
    });
};


exports.getAdminById = (req,res) =>{ 
    adminModel.findById (req.params.id).then(users =>{
        if(users){
            res.json({
                message: `admin with the id${req.params.id}`,
                data:users
            })
        }else{
            res.status(404).json({
                message:`there is not admin with the id${req.params.id}`
            })
        }
    }).catch(error=>{
        if(error.name==="CastError" && error.kind==="ObjectId"){
            res.status(404).json({
                message: `There is no admin in our database with the id${req.params.id}`
            })
        }else{
            res.status(500).json({
                message: error
            })
        }
    })
}