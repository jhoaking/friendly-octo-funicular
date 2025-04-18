import { NuevaTask, TasksData } from "../types/data";
import { taskModel } from "../model/taskModel";
import {  BadRequest, NotFound } from "../util/Error";


export const getTask = async ():Promise<TasksData[]> =>{
        const result = await taskModel.obtenerTarea();
        if(!result){
            throw new NotFound("Tarea");
        }
        return result as TasksData[];
}

export const getTaskById = async (id : number) : Promise<TasksData | undefined> => {
    
        const result = await taskModel.obtenerTareaPorId(id);
        if(!result){
            throw new NotFound("Tarea");
        }
        return result;
}

export  const createTask = async (data: NuevaTask) : Promise<TasksData>=>{
   
        const result = await taskModel.crearTarea(data);
        if(!result){
            throw new BadRequest("datos invalidos");
        }
        return result;
   
}

export const deleteTask = async (id: number) : Promise<boolean>=> {
        const result = await taskModel.eliminarTarea(id);
        if(!result){
            throw new NotFound("tarea");
        }
        return result;
}

export const updateTask = async (id:number , data : NuevaTask) : Promise<boolean> =>{
   
        const result = await taskModel.actualizarTarea(id,data);
        if(!result){
            throw new NotFound("Tarea");
        }
        return result;
}



