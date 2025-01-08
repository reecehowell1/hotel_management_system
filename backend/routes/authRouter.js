const express = require('express');
const User=require('../models/users');
const jwt = require('jsonwebtoken')
const router = express.Router();


router.post('/register' ,async (req,res)=>{
    const {firstname,lastname,email,password,roleType} = req.body;
    try {
        let user=await User.findOne([email]);
        if(user){
            return res.status(400).json({message:'User already exists'});
        }

        newUser = new User ({
            firstname,
            lastname,
            email,
            password,
            roletype
        });


        await newUser.save();
        const payload={
            user:{
                id:user._id
            }
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});  

        res.status(200).json({message:'User has been registered succesfully'})
        
    } catch (error) {
        console.error(error.message??'Something went wrong')
        res.status(500).json({message:'Server Error'});
        
    }
});






router.post('/login', async(req,res)=>{
    const{email,password}=req.body;

    try{
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Invalid Credentials'});

        }
        const isMatch= await user.matchPassword(password);

    } catch (error) {
        console.error(error.message??'Something went wrong')
        res.status(500).json({message:'Server Error'});
    }
    



});

module.exports = router;