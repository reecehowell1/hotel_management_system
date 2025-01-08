
const express = require('express'); //fetches express package

const cors = require('cors');

const connectDB=require('./config/db');

require("dotenv").config();

const app= express(); 
const authRoutes = require('./routes/authRouter')

connectDB();

app.use(cors());

const PORT=process.env.PORT||3001;

app.use(express.json());



app.use("/api/auth", authRoutes)



app.get('/',(req,res)=>{
    res.send('Welcome to the hotel management system')
});

app.listen(3001,() => console.log(`SERVER running on http://localhost:${PORT}`));