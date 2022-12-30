const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    firstname:{
        type:String,
        required : true
    },
    lastname:{
        type:String,
        required : true
    },
    dob :{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    fatherfirstname:{
        type:String,
        required : true
    },
    fatherlastname:{
        type:String,
        required : true
    },
    motherfirstname:{
        type:String,
        required : true
    },
    motherlastname:{
        type:String,
        required : true
    },
    gender:{
    type:String,
    required:true
    },
   
    nationality:{
        type: String,
        required: true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
   
    phone: {
        type: Number
        
    },
   
    mob:{
        type:Number,
        required:true
    },
    HSCName:{
        type:String,
        required:true
    },
    HSC_Board:{
        type:String,
        required:true 
    },
    HSCPercentage:{
        type:Number,
        required:true
    },
    SSCName:{
        type:String,
        required:true
    },
    SSC_Board:{
        type:String,
        required:true 
    },
    SSCPercentage:{
        type:Number,
        required:true
    },
    Current_Board:{
        type:String,
        required:true 
    },
    CurrentInstituteName:{
        type:String,
        required:true
    },
    CurrentPercentage:{
        type:Number,
        required:true
    },
    Backloge:{
        type:Number
    }

})
const Register = new mongoose.model("User" , schema);

module.exports = Register;