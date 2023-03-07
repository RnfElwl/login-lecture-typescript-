"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_ctrl_1 = require("./home.ctrl");
const router = express_1.default.Router();
router.get("/", home_ctrl_1.home);
router.get("/login", home_ctrl_1.login);
exports.default = router;
