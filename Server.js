const express=require('express');
const app=express();
const connectdb=require('./config/connectDB');
const cors = require('cors');

// Add middleware to parse JSON bodies

app.use(express.json());
app.use(cors()); // Allows all origins (good for development)
app.use(express.static('public')); // Serve static files from the 'public' directory

//server
const dotenv=require('dotenv').config()
connectdb();
app.use('/',require('./routers/userRouter'))
app.use('/receipe',require('./routers/receipe'));
app.use('/favorites',require('./routers/favourites'));
















const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server started running on ${port}`)
})