import express from "express";
import { login, register, loginnew } from "../controllers/authController.js";

const Router = new express.Router();

Router.post("/register", register);
Router.get("/login", login);
Router.post('/login-user', login)
Router.post('/login-new', loginnew)

export default Router;
