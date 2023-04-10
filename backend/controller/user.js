import User from '../model/user.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../config/generateToken.js'

export const register = asyncHandler(async(req,res) => {
    const { name, email, password, isAdmin } = req.body;
    const uE = await User.findOne({ email });
    if(uE) res.status(400).json({
        message:"User with this email exists"
    })
    else{
        const user = await User.create({
            name, email, password, isAdmin
        })
        if(user){
            const uSend = await User.findOne({ email })
            const { _id, name:nSend, email:eSend, isAdmin } = uSend._doc
            res.status(201).json({
                message:"User created successfully",
                user:{
                    _id, 
                    name:nSend, 
                    email:eSend, 
                    isAdmin,
                    token:generateToken(user._id)
                }
            })
        }
        else{
            res.status(500).json({
                message:"Error creating user",
            })
        }
    }
})

export const login = asyncHandler(async(req,res) => {
    const { email, password } = req.body
    const uE = await User.findOne({ email });
    if(!uE) res.status(404).json({
        message:"User not found",
    })
    else{
        if(await uE.matchPassword(password)) {
            const user = await User.findOne({ email }).select("-password");
            const { _id, name, email:eSend, isAdmin } = user._doc;
            res.status(200).json({
                message:"Logged in successfully",
                user:{
                    _id,
                    name,
                    email:eSend,
                    isAdmin,
                    token: generateToken(uE._id),
                }
            })
        }
        else{
            res.status(401).json({
                message:"Bad credentials"
            })
        }
    }
})