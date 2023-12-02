import { User } from "../models/user.js";
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {
    // const { token } = req.cookies;
    // if (!token) {
    //     return res.status(404).json({
    //         success: false,
    //         message: "Please Login First!",
    //     });
    // }

    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = await User.findById(decoded._id); 
    req.user = await User.findById('65699c460598266fe13a6484'); 

    next();
};

