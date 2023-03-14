import express, { Request, Response, Router } from "express";
import { output, process } from "./home.ctrl";

const router: Router = express.Router();

router.get("/", output.home);

router.get("/login", output.login);
router.post("/login", process.login);
export default router;
