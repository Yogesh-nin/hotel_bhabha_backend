import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
    guestCapacity: {
      type: Number,
    },

    internet: {
      type: Boolean,
      default: false,
    },
    breakfast: {
      type: Boolean,
      default: false,
    },
    ac: {
      type: Boolean,
      default: false,
    },

    roomCleaning: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      required: true,
    },

    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],

    images: [{ public_id: { type: String }, url: { type: String } }],
  },
  { timestamps: true }
);
export default mongoose.model("Room", RoomSchema);
