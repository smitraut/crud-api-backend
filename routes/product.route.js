// routes/product.route.js

import express from 'express';
const router = express.Router();
import { getProducts, getProduct, postProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
