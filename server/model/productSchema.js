const mongoose = require('mongoose');
const Joi = require('joi');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    image: {
        type: String, 
        required: true
      }
})

module.exports = mongoose.model('Product',productSchema);