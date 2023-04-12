import { Request, Response } from "express";
import { User } from "../../models/User";

const output = {
  home: (req: Request, res: Response) => {
    res.render("home/index");
  },
  login: (req: Request, res: Response) => {
    res.render(`home/login.ejs`);
  },
  register: (req: Request, res: Response) => {
    res.render(`home/register.ejs`);
  },
};

const process = {
  login: (req: Request, res: Response) => {
    const user = new User(req.body);
    const response = user.login();
    console.log(response);
    return res.json(response);
  },
  register: (req: Request, res: Response) => {
    const user = new User(req.body);
    const response = user.register();
    console.log(response);
    return res.json(response);
  },
};

export { output, process };
