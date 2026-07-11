import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    rollno:{
        type: String,
        required: [true, "Rollno is required"],
        unique: [true, "Rollno must be unique"]
    },
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: [true, "Email must be unique"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }

},{
    timestamps: true
});

const userModel = mongoose.model("user", userSchema)
export default userModel;