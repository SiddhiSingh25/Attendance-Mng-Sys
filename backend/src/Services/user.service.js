import { User } from "../Models/User.model.js";

export const createUser = async function ({fullName, email, password, branch, semester, number}) {
    
    if (!fullName.firstName || !email || !password || !branch || !semester || !number) {
       throw new Error("ALL FIELDS ARE REQUIRED");
    }
    const user  =  User.create({
        fullName : {firstName : fullName.firstName, lastName :  fullName.lastName},
        email,
        password,
        branch,
        semester,
        number
    })

    return user;
}
