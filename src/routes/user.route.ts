import { Router } from "express";

import { signUp } from "../controllers/users/signUp.controller.js";
import { signIn } from "../controllers/users/signIn.controller.js";
import { emailValidation } from "../middlewares/emailValidation.middleware.js";
import { userValidation } from "../middlewares/userValidation.middleware.js";

const router = Router();

router.post("/sign-up", emailValidation, signUp);
router.post("/sign-in", userValidation, signIn);

export default router;