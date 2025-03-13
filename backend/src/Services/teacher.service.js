import { Teacher } from "../Models/Teacher.model.js";


export const createTeacher = async function ({
    fullName,
    email,
    password: hashPassword,
    branch,
    number,
}) {
    if (
        !fullName ||
        !hashPassword ||
        !email ||
        !branch ||
        !number
    ) {
        throw new Error("All fields are required");
    }

    const teacher = Teacher.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName,
        },
        email,
        password: hashPassword,
        branch,
        number,
    });
    return teacher;
};
