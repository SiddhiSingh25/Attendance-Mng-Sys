import { validationResult } from "express-validator";
import { User } from "../Models/User.model.js";
import { createUser } from "../../Services/user.service.js";
import { BlackListToken } from "../Models/blacklistToken.model.js";

const userRegister = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password } = req.body;

    const hashPassword = await User.hashPassword(password);

    const user = await createUser({ fullName, email, password: hashPassword });

    const token = user.genrateAuthToken();

    res.status(201).json({
        token,
        user,
    });
};

const login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ message: "Invalid email " });
    }

    const isMatch = await user.comparePass(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid  password" });
    }

    const token = await user.genrateAuthToken();

    res.cookie("token", token);
    return res.status(200).json({ token, user });
};

const profile = async (req, res) => {
    res.status(200).json({
        data: req.user,
    });
};

const logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        const token =
            req.cookies.token || req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(400).json({ message: "No token provided" });
        }

        await BlackListToken.create({ token });

        return res.status(200).json({ message: "Logged Out" });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export { userRegister, login, profile, logout };
