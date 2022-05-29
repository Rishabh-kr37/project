import express from 'express';
import dotnev from 'dotenv';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import DefaultData from './default.js';

import Router from './routes/route.js';



const app=express();

dotnev.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);


const PORT= 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



Connection(USERNAME, PASSWORD);


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();