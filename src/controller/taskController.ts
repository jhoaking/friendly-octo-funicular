import { getTask,getTaskById,createTask,deleteTask,updateTask } from "../services/taskServices";
import { validarTask } from "../schema/tasSchema";
import { Request, Response } from 'express';
import { NuevaTask } from "../types/data";



export class  taskController{
    static obtenerTarea = async(req: Request, res : Response) : Promise<void> =>{
        try {
            const result = await getTask();
             res.status(200).json(result);
        } catch (error) {
            res.status(500).json({message : 'error al obtener en el controller'});
        }
    }

    static otenerTareaPorId = async (req : Request , res: Response) : Promise<void> =>{
        try {
            const result = await getTaskById(+req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({message : 'error al obtener el id  en el controller'});
        }
    }

    static createTarea = async (req : Request , res: Response) :Promise<void> =>{
        try {
            const vali =  validarTask(req.body);
            if(!vali.valid){
                  res.status(400).json({ errors: vali.errors });
                  return;
            }
            const tarea = await createTask(vali.data as NuevaTask);
            res.status(201).json(tarea);
        } catch (error) {
            res.status(500).json({message : 'error al crear en el controller'});
        }
    }

    static deleteTarea = async (req : Request , res : Response): Promise<void> =>{
        try {
            const result = await deleteTask(+req.params.id);
            res.status(200).json({message : 'tarea eliminada con exito',result});
        } catch (error) {
            res.status(500).json({message : 'error al eliminar en el controller'});
        }
     }
    

     static  updateTarea = async (req: Request , res : Response) : Promise<void> =>{
        try {
            const vali = validarTask(req.body);
            if(!vali.valid){
                res.status(400).json({ errors: vali.errors });
                return;
            }

            const tarea = await updateTask(+req.params.id, vali.data as NuevaTask);
            res.status(200).json(tarea);
        } catch (error) {
            res.status(500).json({message : 'error al actualizar en el controller'});
        }
     }
}