import mongoose from "mongoose";
const cartDataSchema = new mongoose.Schema(

  {
    cart: [{
      roomid: {
        type: String,
      },
      roomName: {
        type: String,
      },
      quantity: {
        type: Number,
      },

    }],
  },
  { timestamps: true }
);

export default mongoose.model("cartData", cartDataSchema);
