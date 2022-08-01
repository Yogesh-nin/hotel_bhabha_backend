import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const Router = new express.Router();

Router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

Router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

Router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

//UPDATE
Router.put("/:id", verifyUser, updateUser);

//DELETE
Router.delete("/:id", verifyUser, deleteUser);

//GET
Router.get("/:id", verifyUser, getUser);

//GET ALL
Router.get("/", verifyAdmin, getUsers);

export default Router;
