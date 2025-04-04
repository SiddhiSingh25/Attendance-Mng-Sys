import express from "express";
import { teacherLogin, teacherRegister } from "../controllers/teacher.controllers.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/authUser.middleware.js";
import { authTeacher } from "../middlewares/authTeacher.middleware.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("fullName.firstName")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 character long"),
        body("password")
            .isLength({ min: 4 })
            .withMessage("Password must be at least 4 character long"),
        body("branch")
            .isLength({ min: 4 })
            .withMessage("Password must be at least 4 character long"),
        body("number")
            .isLength({ min: 10 })
            .withMessage("Mobile no must be at 10 character long"),
    ],
    teacherRegister
);

router
    .route("/login")
    .post(
        [
            body("email").isEmail().withMessage("Invalid email"),
            body("password")
                .isLength({ min: 4 })
                .withMessage("Password must be at least 4 character long"),
        ],
        teacherLogin
    );


export default router;
