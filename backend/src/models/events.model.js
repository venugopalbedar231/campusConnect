import mongoose, { mongo } from "mongoose";

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Title must be unique"]
    },
    description:{
        type: String,
        required: [true, "Content is required"]
    },
    category:{
        type: String,
        required: [true, "Category is required"],
        enum: ["entertainment", "urgent", "general", "others"],
    },
    venue:{
        type: String,
        required: [true, "Content is required"]
    },
    startTime:{
        type: Date,
        required: [true, "Start time is required"]
    },
    endTime:{
        type: Date,
        required: [true, "End time is required"]
    },
    organizer:{
        type: String,
        required: [true, "organizer is required"],
        default: "anonymous"
    }

},{
    timestamps: true
});

const eventModel = mongoose.model("event", eventSchema)
export default eventModel;