import { validationResult } from "express-validator";
import { Teacher } from "../Models/Teacher.model.js";
import { createTeacher } from "../Services/teacher.service.js";

const teacherRegister = async (req, res) => {
    const errrors = validationResult(req);
    if (!errrors.isEmpty()) {
        return res.status(400).json({ errors: errrors.array() });
    }

    const { fullName, email, password, branch, number } = req.body;

    const existingUser = await Teacher.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const hashPass = await Teacher.hashPassword(password);

    const teacher = await createTeacher({
        fullName,
        email,
        password : hashPass,
         branch,
        number,
    });

    const token = teacher.authGenerateToken();

    res.status(201).json({
        token,
        teacher,
    });
};

const teacherLogin = async(req, res)=>{
     const errors = validationResult(req);
    
        if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const { email, password } = req.body;
    
        const teacher = await Teacher.findOne({ email }).select("+password");
    
        if (!teacher) {
            return res.status(401).json({ message: "Incorrect email or password!" });
        }
    
        const isMatch = await teacher.comparePass(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect email or password!" });
        }
    
        const token = teacher.genrateAuthToken();
    
        res.cookie("token", token);
        return res.status(200).json({ token, teacher });
}

export { teacherRegister, teacherLogin };
