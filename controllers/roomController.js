import Room from "../database/room.js";
import { v2 as cloudinary } from "cloudinary";
// import file from "@babel/core/lib/transformation/file/file.js";

cloudinary.config({
  cloud_name: "dvo8pmkwp",
  api_key: "678266168414687",
  api_secret: "Sa4qQqNQwDZVmMimgvHyLMApf48",
  secure: true,
});

export const createRoom = async (req, res, next) => {
  console.log(req.body);
  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    console.log(result);

    const newRoom = new Room({
      name: req.body.name,
      pricePerNight: req.body.pricePerNight,
      guestCapacity: req.body.guestCapacity,
      desc: req.body.desc,
      image: result.url,
    });

    try {
      const savedRoom = newRoom.save();
      res.status(201).json(savedRoom);
    } catch (error) {
      next(error);
    }
  });

};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
