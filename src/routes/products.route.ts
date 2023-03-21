import { Router } from "express";

import { getProducts } from "../controllers/products/getProducts.controller";
import { getOneProduct } from "../controllers/products/getOneProduct.controller"

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getOneProduct);


export default router;