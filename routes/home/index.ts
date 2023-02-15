import express, { Request, Response, Router } from "express";
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("home/index.ejs");
});

router.get("/login", (req: Request, res: Response) => {
  res.render(`home/login.ejs`);
});

export default router;
