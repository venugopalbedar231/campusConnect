import mongoose, { mongo } from "mongoose";

const noticeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Title must be unique"]
    },
    content:{
        type: String,
        required: [true, "Content is required"]
    },
    category:{
        type: String,
        required: [true, "Category is required"],
        enum: ["entertainment", "urgent", "general", "others"],
    },
    author:{
        type: String,
        required: [true, "author is required"],
        default: "anonymous"
    }

},{
    timestamps: true
});

const noticeModel = mongoose.model("notice", noticeSchema)
export default noticeModel;