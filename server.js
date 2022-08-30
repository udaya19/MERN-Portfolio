const express = require('express');
const { urlencoded } = require('express');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
//mongodb connection
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting database"));
db.once('open',()=>console.log("Connected to database"));
//Using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}))
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}));
//Using routes
app.use('/user',require('./routes/user'));
app.use('/education',require('./routes/education'));
app.use('/experience',require('./routes/experience'));
app.use('/projects',require('./routes/project'));
app.use('/upload',require('./routes/upload'));
app.use('/',require('./routes/about'));
//Listening on port
app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})