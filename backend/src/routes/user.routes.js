import express from "express";
import {
    userRegister,
    userLogin,
    profile,
    logout,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/authUser.middleware.js";

const router = express.Router();

router
    .route("/register")
    .post(
        [
            body("email").isEmail().withMessage("Invalid email"),
            body("fullName.firstName")
                .isLength({ min: 3 })
                .withMessage("First name must be at least 3 character long"),
            body("password")
                .isLength({ min: 4 })
                .withMessage("Password must be at least 4 character long"),
            body("semester")
            .isLength({ min: 1 })
            .withMessage("Semester cannot be empty"),
            body("branch")
                .isLength({ min: 4 })
                .withMessage("Password must be at least 4 character long"),
            body("number")
                .isLength({ min: 10 })
                .withMessage("Password must be at least 4 character long"),
        ],
        userRegister
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
        userLogin
    );

router.get("/profile", authUser, profile);

router.get("/logout", authUser, logout);

export default router;
