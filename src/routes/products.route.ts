import { Router } from "express";

import { getProducts } from "../controllers/products/getProducts.controller";
import { getOneProduct } from "../controllers/products/getOneProduct.controller";
import { getwine } from "../controllers/products/getWine.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getOneProduct);
router.get("/products/wine", getwine);


export default router;