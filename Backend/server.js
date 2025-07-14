import express from 'express';
import dotenv from 'dotenv'
import Product from './models/product.model.js';
import {connectDB}  from './config/db';

dotenv.config();

const app = express();

app.use(express.json());


app.post('/api/products', async (req,res) => {
    const product = req.body;
    
    if(!product.name || !product.price || !product.image){
        return res.status(404).json({ success : false , message : "fill the above domains"})
    }

    

    const newProducts = new Product(product);
    

    try {
        await newProducts.save();
        res.status(202).json({
            success: true,
            data: newProducts
        })
    } catch (error) {
        console.error("Error in create Product :" , error.message);
        res.status(500).json({success:false,message:'Server Error'});
    }
})

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
