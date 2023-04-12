import express, { Request, Response, Router } from "express";
import { output, process } from "./home.ctrl";

const router: Router = express.Router();

router.get("/", output.home);

router.get("/login", output.login);
router.get("/register", output.register);

router.post("/login", process.login);
router.post("/register", process.register);
export default router;
