import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import mongoConnection from './db/dbConfig.js';

config();
const PORT = process.env.PORT || 7000;
const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(morgan('tiny'));
mongoConnection();




app.listen(PORT, () =>{
    console.log(`server listening at ${PORT}`);
})