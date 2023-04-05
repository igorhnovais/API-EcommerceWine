import { Router } from "express";

import { getProducts } from "../controllers/products/getProducts.controller";
import { getOneProduct } from "../controllers/products/getOneProduct.controller";
import { getwine } from "../controllers/products/getWine.controller";
import { getCups } from "../controllers/products/getCups.controller";
import { getTaboos } from "../controllers/products/getTaboos.controller";
import { getSearchedProducts } from "../controllers/products/getSearchedProducts";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getOneProduct);
router.get("/products/wine", getwine);
router.get("/products/cup", getCups);
router.get("/products/taboo", getTaboos);
router.post("/products/searched", getSearchedProducts);

export default router;