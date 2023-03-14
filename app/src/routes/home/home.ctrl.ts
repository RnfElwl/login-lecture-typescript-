import { Request, Response } from "express";
const users = {
  id: ["1234", "1020", "tmdduq"],
  psword: ["1234", "1020", "tmdduq"],
};
const output = {
  home: (req: Request, res: Response) => {
    res.render("home/index");
  },
  login: (req: Request, res: Response) => {
    res.render(`home/login.ejs`);
  },
};

const process = {
  login: (req: Request, res: Response) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({ success: true });
      }
    }
    return res.json({
      success: false,
      mag: "로그인에 실패하였습니다.",
    });
  },
};

export { output, process };
