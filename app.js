import express from "express";
import dotenv from "dotenv";
dotenv.config();

const appDev = express();
appDev.use(express.json());
const config = JSON.parse(process.env.MY_CONFIG);

appDev.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});