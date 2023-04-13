import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/product.js";
import { admin, authenticate } from '../middleware/auth.js'
import { Router } from 'express'

const router  = Router();

router.route("/")
.get(getAllProducts)
.post(authenticate,admin,addProduct)

router.route("/:productId")
.get(getProductById)
.put(authenticate,admin,updateProduct)
.delete(authenticate,admin,deleteProduct);

export default router;