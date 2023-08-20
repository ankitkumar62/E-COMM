const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product =require('../model/productSchema');
const { date } = require('joi');




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null,Date.now()+"_"+file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  router.post('/add-product', upload.single('file'), async (req, res) => {
    try {
      const { name, price, category, company } = req.body;
      const image = req.file ? req.file.filename : null;
  
     
      const newProduct = new Product({
        name: name,
        price: price,
        category: category,
        company: company,
        image: image, // Assign the file name to the 'image' field
      });
  
      // Save the new product to the database
      const savedProduct = await newProduct.save();
  
      res.status(201).json({ success: true, product: savedProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ success: false, message: 'An error occurred while adding the product' });
    }
  });

function verifyToken(req,res,next){
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        Jwt.verify(token,jwtkey,(err,valid)=>{
            if(err){
                res.send('Token error')
            }
            else{
                 next();
            }

        })


    }else{
res.send({result:"ADD TOken"})
    }
}
module.exports = router;