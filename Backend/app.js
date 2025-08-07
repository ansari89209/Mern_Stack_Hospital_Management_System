import express from "express";
import {config} from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";


const app = express();
config ({path: "./config/config.env"}); // env file ko setup kia h 

// frontend k liye cors ka use aur isme 2 h aur dono ka alag url setup kia
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials : true,
}));
 

//yha pr hmne 3 middleware use kra h
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 //fileupload bhi ek middleware h
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}));

// route setup kia h
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter)

// database ka connection use kia h
dbConnection();

// end m maine error middleware use kra h aur ye hamesa end m use hoga
app.use(errorMiddleware);
export default app;