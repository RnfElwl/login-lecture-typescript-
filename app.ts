import express, { Application, Request, Response } from "express";

const app: Application = express();
const num: Number = 1231323;
import home from "./routes/home/index";
//앱 세팅

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

export { app, num };
