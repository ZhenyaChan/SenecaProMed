const pharmaModel = require("../models/pharma-model");
const bcrypt = require('bcryptjs');

// POST Route - the code directly below this does the same
// Add a Pharmacy to the database
/*exports.createPharmacy = (req, res) => {
   const pharmacyUser = new pharmaModel(req.body);
   pharmacyUser.save().then((newPharmaUser) => {
         res.status(201).json({
            message: "Pharmacy user created",
            data: newPharmaUser
         });
      })
      .catch((err) => {
         res.status(500).json({ message: err }); // See error message in the browser
         console.log(`Error: ${err}`);
      });
};*/

// POST Route
// Add a Pharmacy to the database
exports.createPharmacy = async (req, res) => {
   try {
      let salt = bcrypt.genSaltSync(10); //password encription 
      let hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash;
      req.body.userName = req.body.email;
      

      const pharmacyUser = new pharmaModel(req.body);
      await pharmacyUser.save(); // does the same as .then above, only executes the next line if the save() was successful
      res.status(201).json({
         message: "Pharmacy user created",
         data: pharmacyUser
      });
   } catch (err) {
      res.status(500).json({ message: err }); // See error message in the browser
      console.log(`Error: ${err}`);
   }
};

// This is the JSON you can use with Thunder Client/Postman to create a Pharamacy:

/*
{
    "pharmacyName": "Some Pharmacy",
    "phoneNumber": ["343-232-1831"],
    "email": "get@gmail.com",
    "postal": "M5H 1S4",
    "country": "Canada",
    "province": "Ontario",
    "city": "Toronto",
    "productList": [ 
      { 
        "_id": "1234567",
        "title": "Tylenol",
        "description": "Fast, effective relief of headaches, aches and pain, and fever.",
        "price": 15.27
      },
      { 
        "_id": "1234568",
        "title": "Advil",
        "description": "Fast-acting Advil Regular Strength Tablets provide effective pain relief from migraine, muscle and joint pain, period and menstrual pain, backaches, neckaches, toothaches, and pain from inflammation associated with arthritis or physical overexertion.",
        "price": 11.97
      },
      { 
        "_id": "1234569",
        "title": "NyQuil",
        "description": "All-in-one relief. Relieves cough, headache, fever, sore throat pain, minor aches and pains, sneezing, runny nose and cough.",
        "price": 13.97
      },
      { 
        "_id": "1234570",
        "title": "Buckley's",
        "description": "Provides fast-acting relief for headache, aches and pains, fever and chills, sore throat pain, coughs, and nasal and sinus congestion.",
        "price": 19.99
      }
    ]
  }
*/

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
