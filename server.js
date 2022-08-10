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
//Using routes
app.use('/education',require('./routes/education'))
app.use('/experience',require('./routes/experience'))
app.use('/',require('./routes/about'))
//Listening on port
app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})