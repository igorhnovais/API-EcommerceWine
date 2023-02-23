import express from 'express';
import cors from "cors";

import userRouters from "./routes/user.route.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouters);



export default app;