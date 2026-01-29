import express from "express";
import { googleLogin, login, logOut, register } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logOut);
authRouter.post("/googlelogin", googleLogin);

export default authRouter;