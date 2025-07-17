import express from 'express';
import { getProducts, postProducts, updateProducts, deleteProducts } from '../controller/product.controller.js';
const productRouter = express.Router();

productRouter.route('/').get(getProducts).post(postProducts);
productRouter.route('/:id').put(updateProducts).delete(deleteProducts);

export default productRouter;