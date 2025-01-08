const mongoose= require('mongoose');

require('dotenv').config();

const connectDB= async () => {
    try {
        


        await mongoose.connect(process.env.MONGO_URI)//fetches the variable from .env file
        .then(()=>console.log("DATABASE HAS BEEN CONNECTED!"));
    } catch (error) {
        console.error(error.message??"Not connected to the database");
        process.exit(1);
        
    }

};

const useCollection=(collectionName) =>{
    return mongoose.connection.useCollection(collectionName);
};


module.exports=connectDB;