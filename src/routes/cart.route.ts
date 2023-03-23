import { Router } from "express";

import {postOneProduct} from "../controllers/cart/postOneProduct.controller";
import { authVerification } from "../middlewares/authVerification.middleware";


const router = Router();

router.post("/cart", authVerification, postOneProduct)


export default router;