import express from "express";
import {sendEmail} from '../controllers/contactController.js'
const Router = new express.Router();

Router.post("/send", sendEmail);

export default Router;
