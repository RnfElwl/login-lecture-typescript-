import { Request, Response } from "express";

const home = (req: Request, res: Response) => {
  res.render("home/index.ejs");
};

const login = (req: Request, res: Response) => {
  res.render(`home/login.ejs`);
};

export { home, login };
