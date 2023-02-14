console.log("hihi");
const express = require("express");
const app = express();

//앱 세팅

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req: any, res: any) => {
  res.render("home/index.ejs");
});

app.get("/login", (req: any, res: any) => {
  res.render(`home/login.ejs`);
});

app.listen(3000, function () {
  console.log(`
  `);
});
