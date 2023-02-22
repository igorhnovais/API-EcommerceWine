import { Router } from "express";

import { signUp } from "../controllers/signUp.controller.js";
import { emailValidation } from "../middlewares/emailValidation.middleware.js";

const router = Router();

router.post("/sign-up", emailValidation, signUp);

export default router;