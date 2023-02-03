const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
   role: { 
      type:String,
      default: "pharmacy",
  },
   userName: {
      type: String
    },
    password: {
        type: String,
        required : true
    },
   pharmacyName: {
      type: String,
      required: true
   },
   phoneNumber: {
      type: Array,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   postalCode: {
      type: String,
      required: true
   },

   city: {
      type: String,
      required: true
   },

   province: {
      type: String,
      required: true
   },
   country: {
      type: String,
      required: true
   }
});

const pharmaModel = mongoose.model("pharma_User", pharmacySchema);
module.exports = pharmaModel;
