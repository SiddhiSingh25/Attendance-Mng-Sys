import { User } from "../Models/User.model.js";

export const createUser = async function ({
    fullName,
    email,
    password: hashPassword,
    branch,
    semester,
    number,
}) {
    if (
        !fullName ||
        !hashPassword ||
        !email ||
        !branch ||
        !semester ||
        !number
    ) {
        throw new Error("All fields are required");
    }

    const user = User.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName,
        },
        email,
        password: hashPassword,
        branch,
        semester,
        number,
    });
    return user;
};
