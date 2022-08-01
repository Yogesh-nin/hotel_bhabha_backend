import mongoose from "mongoose";
const dateSchema = new mongoose.Schema(
    {
        dates: {
            startDate: {
                date: {
                    type: Number
                },
                month: {
                    type: Number
                },
                year: {
                    type: Number
                }
            },
            endDate:
            {
                date: {
                    type: Number
                },
                month: {
                    type: Number
                },
                year: {
                    type: Number
                },
            }
        }
    }
)

export default mongoose.model("DateModel", dateSchema);