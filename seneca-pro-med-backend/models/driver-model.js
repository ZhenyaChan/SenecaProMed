const mongoose = require("mongoose");
const { Schema } = mongoose;

//  creating schema
const driverSchema = new Schema({ 
  role: { 
    type:String,
    default: "driver",
},
  userName: {
    type: String
  },
  password: {
      type: String,
      required : true
  },
  firstName: { 
      type: String,
      required : true
  },
  lastName:{
      type: String,
      required: true
  },
  phoneNumber:{
    type: Array,
    required:true
  },
  email:{
    type:String,
    required:true,
  },
  postalCode:{
    type: String,
    required:true,
  },
  city:{
    type:String,
    required: true,
  },
  province:{
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  },
});

const driver_User = mongoose.model('driver_User', driverSchema);
module.exports = driver_User;