import express from 'express';
import { deleteProduct, getProducts, postProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();

router('/').get(getProducts).post(postProducts)
router('/:id').put(updateProduct).delete(deleteProduct)

export default router;