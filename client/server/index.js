
const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/Auth');
const addProduct = require('./routes/addProduct')
const env = require('dotenv');
const morgan = require('morgan');
 require('./DB/conn')


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
env.config();
app.use('/', authRouter);
app.use('/',addProduct);

const port =process.env.PORT;



app.listen(port,(req,res)=>{
    console.log(`RUnning At ${port}`);
})
