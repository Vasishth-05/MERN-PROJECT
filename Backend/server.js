import express from 'express';
import dotenv from 'dotenv'
import Product from './models/product.model.js';
import {connectDB}  from './config/db.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/api/products', async (req,res) => {

    try {
        const products = await Product.find({});
        res.status(200).json({success : true , data : products})
    } catch (error) {
        console.error("error in getAllProducts : ", error.message)
        res.status(500).json({success : false , message : "No products were found"})
    }
})

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

app.put('/api/products/:id', async (req,res) => {

    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false , message : "invalid product id"})
    }

    try {
        const updatedProducts = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success: true , data : updatedProducts})
    } catch (error) {
        console.log("error in updating the product: ", error.message);
        res.status(500).json({success : false, message : "product not updated"})
    }
})

app.delete('/api/products/:id', async (req,res) => {
    const deleteProduct = Product.findById(req.params.id)

    try {
        await deleteProduct.deleteOne();
        res.status(200).json({success: true , message : "Product removed"})
    } catch (error) {
        console.log("error in deleting the product: ", error.message);
        res.status(500).json({success : false, message : "product not found"})
    }
})


app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
