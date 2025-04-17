import { NuevaTask, TasksData } from "../types/data";
import { taskModel } from "../model/taskModel";


export const getTask = async ():Promise<TasksData[]> =>{
    try {
        const result = await taskModel.obtenerTarea();
        return result as TasksData[];
    } catch (error) {
        console.error(error);
        throw new Error("error al otener las tareas desde el service");
    }
}

export const getTaskById = async (id : number) : Promise<TasksData | undefined> => {
    try {
        const result = await taskModel.obtenerTareaPorId(id);
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("error al otener las tareas por id desde el service");
    }
}

export  const createTask = async (data: NuevaTask) : Promise<TasksData>=>{
    try {
        const result = await taskModel.crearTarea(data);
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("error al crear las tareas desde el service");
    }
}

export const deleteTask = async (id: number) : Promise<boolean>=> {
    try {
        const result = await taskModel.eliminarTarea(id);
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("error al eliminar las tareas desde el service");
    }
}

export const updateTask = async (id:number , data : NuevaTask) : Promise<boolean> =>{
    try {
        const result = await taskModel.actualizarTarea(id,data);
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("error al acualizar las tareas desde el service");
    }
}



