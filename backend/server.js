
const express = require('express'); //fetches express package

const cors = require('cors');

const app= express(); 


const PORT = 3001;
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to the hotel management system')
});

app.listen(PORT,() => console.log(`SERVER running on http://localhost:${PORT}`));