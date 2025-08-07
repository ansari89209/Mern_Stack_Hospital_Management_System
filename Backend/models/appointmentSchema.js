import mongoose from "mongoose";
import validator from "validator";

const appointSchema = new mongoose.Schema({
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
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"]
}
,
    phone: {
        type: String,
        required: true,
        minLength:[10, "Phone Number  Must Contain At least 10 Digits!"],
        maxLength:[10, "Phone Number  Must Contain At least 10 Digits!"]
    },
    aadhaarNo: {
        type: String,
        required: true,
        minLength:[12, "Aadhaar no must contain atleast 12 Digits"],
        maxLength:[12, "Aadhaar no must contain atleast 12 Digits"],
        
    },
    dob:{
        type:Date,
        required:[true, "Dob is required"],
        
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    appointment_date:{
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    doctor:{
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        }
    },
    hasVisited:{
        type:Boolean,
        default:false,
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending", "Accepted", "Rejected"],
        default:"Pending",
    }
    

});
export const Appointment = mongoose.model("Appointment", appointSchema);