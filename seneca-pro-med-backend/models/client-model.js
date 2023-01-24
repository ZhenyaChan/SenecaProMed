const mongoose = require("mongoose");
const { Schema } = mongoose;

//  creating schema
const clientSchema = new Schema({ 
    firstName: { 
      type: String,
      required : true
  },
  lastName:{
      type: String,
      required: true
  }
});

const client_User = mongoose.model('client_User', clientSchema);
module.exports = client_User;