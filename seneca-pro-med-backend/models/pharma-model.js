const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Differences from the SRS document:
// Added a price attribute for each product
// userType is not included in this Schema,
// it's also not included in any of the other Schemas
// created so far. We can always add it if we want it.

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
   postal: {
      type: String,
      required: true
   },
   country: {
      type: String,
      required: true
   },
   province: {
      type: String,
      required: true
   },
   city: {
      type: String,
      required: true
   },

   // Currently 4 products are required
   // to be added when adding a Pharmacy
   productList: {
      type: Array
   }
});

const pharmaModel = mongoose.model("pharma_User", pharmacySchema);
module.exports = pharmaModel;
