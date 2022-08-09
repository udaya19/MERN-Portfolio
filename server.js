const express = require('express');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
//Using middlewares
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 3000");
})