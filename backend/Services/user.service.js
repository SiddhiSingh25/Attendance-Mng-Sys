import { User } from "../src/Models/User.model.js";

export const createUser = async function ({fullName, email, password}) {
    
    if (!fullName.firstName || !email || !password) {
       throw new Error("ALL FIELDS ARE REQUIRED");
    }
    const user  =  User.create({
        fullName : {firstName : fullName.firstName, lastName :  fullName.lastName},
        email,
        password 
    })

    return user;
}
