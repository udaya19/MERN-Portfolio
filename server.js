const express = require('express');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
//mongodb connection
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting database"));
db.once('open',()=>console.log("Connected to database"));
//Using middlewares
app.use(express.json());
app.use(cors());
app.use('/',require('./routes/about'))
app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})