import express from 'express';
import dotenv from 'dotenv'
import {connectDB}  from './config/db.js';
import router from './routes/product.route.js';
import productRouter from './routes/product.route.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/products', productRouter)


app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
