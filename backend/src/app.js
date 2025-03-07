import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

//routes
import UserRoute from "./routes/user.routes.js";

app.use("/users", UserRoute);

