import express from "express";
import { PORT } from "./config";
import routerTask from './routes/taskRoutes';


const app = express();

app.use(express.json());
app.use('/task',routerTask)

app.listen(PORT , () =>{
    console.log('server on port',PORT);
})