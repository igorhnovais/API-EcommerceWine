import { Router } from "express";

import { signUp } from "../controllers/users/signUp.controller";
import { signIn } from "../controllers/users/signIn.controller";
import { emailValidation } from "../middlewares/emailValidation.middleware";
import { userValidation } from "../middlewares/userValidation.middleware";

const router = Router();

router.post("/sign-up", emailValidation, signUp);
router.post("/sign-in", userValidation, signIn);

export default router;