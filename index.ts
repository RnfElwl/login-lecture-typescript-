import express, { Application, Request, Response } from "express";
const app: Application = express();

const PORT: Number = 3000;
import home from "./routes/home/index";
//앱 세팅

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

app.listen(PORT, function () {
  console.log(`
  서버가동
  `);
});
