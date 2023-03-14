import express, { Application, Request, Response } from "express";

const app: Application = express();
const num: Number = 1231323;
import home from "./src/routes/home/index";

import bodyParser from "body-parser";
//앱 세팅

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);

export { app, num };
