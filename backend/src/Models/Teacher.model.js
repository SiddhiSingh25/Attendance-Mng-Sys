import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const teacherSchema = new mongoose.Schema({
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
    branch: {
        type: String,
        required: true,
        enum : ["Non-technical branches", "Technical branches"],
    },
    number: {
        type: Number,
        required: true,
        minlength: [10, "Mobile no must be at least 10 character long"],
    },
    password: {
        type: String,
        required: true,
        select : false
    },
});

teacherSchema.methods.authGenerateToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    return token;
};

teacherSchema.statics.hashPassword = async function (password) {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
};

teacherSchema.methods.comparePass = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
};

export const Teacher = mongoose.model("Teacher", teacherSchema);
