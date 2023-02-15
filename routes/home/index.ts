import express, { Request, Response, Router } from "express";
import { home, login } from "./home.ctrl";
const router: Router = express.Router();

router.get("/", home);

router.get("/login", login);

export default router;
