const mongoose = require('mongoose');
const Product = require('./productSchema')
const userSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
//      products:
//      [
//       {
//          type: mongoose.Schema.Types.ObjectId,
//          ref: 'Product'
//       }
      
//      ]
 })

module.exports = mongoose.model('User',userSchema)