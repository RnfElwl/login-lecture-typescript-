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
    // const id = req.body.id;
    // const psword = req.body.psword;
    // type test = {
    //   id?: any;
    //   psword?: any;
    //   name?: any;
    // };
    // const users: test = UserStorage.getUsers("id", "psword", "name");
    // type result = {
    //   success: boolean;
    //   msg?: string;
    // };
    // const response = {} as result;
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }
    // response.success = false;
    // response.msg = "로그인에 실패하였습니다.";
    // return res.json(response);
  },
};

export { output, process };
