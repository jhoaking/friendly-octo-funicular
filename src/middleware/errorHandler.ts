import { Request, Response, NextFunction } from "express";
import { httpError } from "../util/httpError";

export const errorHandler = async (err : unknown,req: Request , res: Response , next: NextFunction): Promise<void> =>{
    if(err instanceof httpError){
        res.status(err.statusCode).json({error : err.message })
    }else {
        console.error(" Error inesperado:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }

}   