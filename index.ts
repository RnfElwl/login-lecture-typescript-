console.log("hihi");
const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("여기는 루트이당");
});

app.get("/login", (req: any, res: any) => {
  res.send("여기는 로그인!!");
});

app.listen(3000, function () {
  console.log("서버 가동");
});
