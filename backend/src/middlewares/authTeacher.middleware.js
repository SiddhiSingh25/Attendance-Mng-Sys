import { BlackListToken } from "../Models/blacklistToken.model.js";
import jwt from "jsonwebtoken";
import { Teacher } from "../Models/Teacher.model.js";

const authTeacher = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Unauthoried access token ",
        });
    }

    const isBlackListed = await BlackListToken.findOne({ token : token})
    if (isBlackListed) {
        return res.status(401).json({
            message: "Unauthoried access blocked toekn ",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await Teacher.findById(decoded._id);
        req.user = user;

        return next()
    } catch (error) {
        res.status(401).json({
            message: "Unauthoried access decoded",
        });
    }
};

export {authTeacher}