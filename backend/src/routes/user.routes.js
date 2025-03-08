import express from "express";
import {
    userRegister,
    login,
    profile,
    logout,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";

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
        login
    );

router.get("/profile", authUser, profile);

router.get("/logout", authUser, logout);

export default router;
