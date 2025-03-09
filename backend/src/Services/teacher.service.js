import { Teacher } from "../Models/Teacher.model.js";

export const createTeacher = async function ({
    fullName,
    email,
    password,
    branch,
    number,
}) {
    if (
        !fullName.firstName ||
        !email ||
        !password ||
        !branch ||
        !number
    ) {
        throw new Error("ALL FIELDS ARE REQUIRED");
    }

    const user = Teacher.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName,
        },
        email,
        password,
        branch,
        number,
    });
    return user
};
