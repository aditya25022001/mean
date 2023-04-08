import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/product.js";
import { Router } from 'express'

const router  = Router();

router.route("/").get(getAllProducts).post(addProduct)

router.route("/:productId").get(getProductById).put(updateProduct).delete(deleteProduct);

export default router;