import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 character"],
        },

        lastName: {
            type: String,
            minlength: [3, "Last name must be at least 3 character"],
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5  character long"],
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

    socketId: {
        type: String,
    },
});

userSchema.methods.genrateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    return token;
};

userSchema.methods.comparePass = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
};

userSchema.statics.hashPassword = async function (password) {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
};

export const User = mongoose.model("User", userSchema);
