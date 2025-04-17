import express from "express";
import { PORT } from "./config";


const app = express();

app.use(express.json());

app.get('/ping' , (req,res) =>{
     res.send('pong')
})

app.listen(PORT , () =>{
    console.log('server on port',PORT);
})