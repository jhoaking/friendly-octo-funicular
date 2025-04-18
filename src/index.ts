import express from "express";
import { PORT } from "./config";
import routerTask from './routes/taskRoutes';
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use('/task',routerTask)

app.use(errorHandler);
app.listen(PORT , () =>{
    console.log('server on port',PORT);
})