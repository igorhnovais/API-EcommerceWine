import { Router } from "express";

import { getProducts } from "../controllers/products/getProducts.controller";

const router = Router();

router.get("/products", getProducts);


export default router;