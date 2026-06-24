const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



async function registerUser(req,res){
    const {fullName:{firstname, lastname},email, password} = req.body;


    const isUserAlredyExists = await userModel.findOne({email});

    if(isUserAlredyExists){
        res.status(400).json({message:"Usre already exists"});
    }

    const hashPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        fullName:{
            firstname,lastname
        },
        email,
        password: hashPassword
    });

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({message:"User Registre Succesfully",user:{email:user.email , _id:user._id , fullname:user.fullName}})
}

async function loginUser(req,res){
    const {email,password}=req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(400).json({message:"Invalid username password"});
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid  password"});
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({message:"user login Succesfully",user})

}

module.exports={
    registerUser,
    loginUser
};