const pharmaModel = require("../models/pharma-model");
const bcrypt = require('bcryptjs');

// POST Route
// Add a Pharmacy to the database
exports.createPharmacy = async (req, res) => {
   try {
      let salt = bcrypt.genSaltSync(10); //password encription 
      let hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash;
      req.body.userName = req.body.email;
      
      pharmaModel.find({"userName": req.body.email}).then((userDB)=>{ 
         if(userDB.length > 0){
             res.json({
                 message: "Username is already in DB",
             })
         }else {
             const pharmacyUser = new pharmaModel(req.body);
             pharmacyUser.save()
             .then((newUser)=>{
                 res.json({
                     message: "Pharmacy user is created",
                     data : newUser
                 })
             })
             .catch(err=>{
                 console.log(`error ${err}`);
             });
         }
     });
   } catch (err) {
      res.status(500).json({ message: err }); // See error message in the browser
      console.log(`Error: ${err}`);
   }
};


// GET Routes
exports.getAllPharmacyUsers = async (req, res) => {
   try {
      const pharmaData = await pharmaModel.find();
      res.status(200).json({
         message: [`There are ${pharmaData.length} Pharmacy users.`],
         data: pharmaData
      });
   } catch (err) {
      res.status(500).json({ message: err });
   }
};

exports.getPharmacyById = async (req, res) => {
   try {
      const pharmacy = await pharmaModel.findOne({ _id: req.params.id }).exec();
      res.status(200).json({
         message: `Pharmacy user with the id: ${req.params.id} found.`,
         data: pharmacy
      });
   } catch (err) {
      if (err.name === "CastError" && err.kind === "ObjectId") {
         res.status(404).json({
            message: `There is no Pharmacy with the id: ${req.params.id} in the database.`
         });
      } else {
         res.status(500).json({ message: err });
      }
   }
};

// PUT route
exports.updatePharmacyById = async (req, res) => {
   try {
      await pharmaModel.findByIdAndUpdate(req.params.id, req.body, {
         new: true
      });
      res.status(200).json({
         message: `Updated Phramacy with id: ${req.params.id}.`
      });
   } catch (err) {
      res.status(404).json({
         message: `Pharmacy with id: ${req.params.id} could not be found.`
      });
   }
};

// DELETE Route
exports.deletePharmacyById = async (req, res) => {
   try {
      await pharmaModel.deleteOne({ _id: req.params.id }).exec();
      res.status(204).json({
         message: `Pharmacy user with id: ${req.params.id} deleted.`
      });
   } catch (err) {
      res.status(500).json({ message: err });
   }
};
