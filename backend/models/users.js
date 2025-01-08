//database data holding
//user has fname sname password and email
//roletype - manager or customer


const mongoose = require('mongoose');
const CryptoJs=require('crypto-js');

const UserSchema=new mongoose.Schema({
    //[property]:[type:datatype --> string boolena number and required true or false]
    firstname:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    roletype:{
        type:String,
        required:true
    }

});

UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        return next();
    }
    this.password=CryptoJs.SHA512(this.password).toString();
    next();


});




    UserSchema.method.matchPassword= async function(enteredPassword){
        const hashPassword=CryptoJs.SHA512(enteredPassword).toString();
        return hashPassword===this.password;
    }

module.exports=mongoose.model('User', UserSchema);