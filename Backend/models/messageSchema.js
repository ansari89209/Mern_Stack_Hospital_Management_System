import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[3, "First Name Must Contain At least 3 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3, "Last Name Must Contain At least 3 characters!"]
    },
    email: {
        type: String,
        required: true,
        validator : [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength:[10, "Phone Number  Must Contain At least 10 Digits!"],
        maxLength:[10, "Phone Number  Must Contain At least 10 Digits!"]
    },
    message: {
        type: String,
        required: true,
        minLength:[10, "Message must contain atleast 10 characters"],
        
    },
    
})

export const Message = mongoose.model("Message",messageSchema);