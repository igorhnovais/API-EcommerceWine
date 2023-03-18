import { Router } from "express";

import { getProducts } from "../controllers/products/getProducts.controller";
import { getOneProduct } from "../controllers/products/getOneProduct.controller"

const router = Router();

router.get("/products", getProducts);
router.get("/products/wine", getOneProduct);


export default router;