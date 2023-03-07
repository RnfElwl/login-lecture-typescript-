"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.home = void 0;
const home = (req, res) => {
    res.render("home/index.ejs");
};
exports.home = home;
const login = (req, res) => {
    res.render(`home/login.ejs`);
};
exports.login = login;
