// require("dotenv").config();
import {} from 'dotenv/config'
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

//Database Connection
import ConnectDB from "./database/connection.js";
import bodyparser from 'body-parser'
//route
import authRoute from "./routes/auth.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/user.js";
import bookingRoute from "./routes/booking.js";
import contactRoutes from "./routes/contact.js";

const bha_bha = express();

bha_bha.use(cors());
bha_bha.use(express.json());
bha_bha.use(helmet());
bha_bha.use(cookieParser());
bha_bha.use(bodyparser.urlencoded({extended:false}))
bha_bha.use(bodyparser.json())

//middleware
bha_bha.use("/api/auth", authRoute);
bha_bha.use("/api/user", userRoute);
bha_bha.use("/api/room", roomRoute);
bha_bha.use("/api/booking", bookingRoute);
bha_bha.use("/api/contact", contactRoutes);

bha_bha.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

bha_bha.get("/", (req, res) => {
  res.send("Welcome to my hotel-bhabha backend software");
});

const PORT = process.env.PORT || 4000

bha_bha.listen(PORT, () => {
  ConnectDB(); //connect to database
});
