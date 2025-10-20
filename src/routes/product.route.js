import { Router } from 'express';
import { saveProduct, updateProduct, listProducts } from '../controllers/product.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/save', authMiddleware, saveProduct);
router.put('/update', authMiddleware, updateProduct);
router.get('/',authMiddleware, listProducts);

export default router;
