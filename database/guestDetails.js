import mongoose from "mongoose";
const GuestDetailsSchema = new mongoose.Schema(
  {
    guest:
    {
      firstName: {
        type: String,

      },
      lastName: {
        type: String,

      },
      email: {
        type: String,


      },

      phone: {
        type: String,
      },
    }
  },
  { timestamps: true }
);

export default mongoose.model("GuestDetails", GuestDetailsSchema);
