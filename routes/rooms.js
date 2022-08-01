import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const Router = express.Router();
//CREATE
Router.post("/", verifyAdmin, createRoom);

//UPDATE
Router.put("/availability/:id", updateRoomAvailability);
Router.put("/:id", verifyAdmin, updateRoom);
//DELETE
Router.delete("/:id", verifyAdmin, deleteRoom);
//GET

Router.get("/:id", getRoom);
//GET ALL

Router.get("/", getRooms);

export default Router;
