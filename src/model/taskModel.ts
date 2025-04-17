
import {pool} from '../db'
import { NuevaTask, TasksData } from '../types/data';
import { ResultSetHeader,RowDataPacket } from 'mysql2';

export class taskModel{

    static obtenerTarea = async () : Promise<TasksData[]> =>{
        try {
            const query = 'SELECT * FROM tasks';
            const [rows] = await pool.query(query);
            return rows as TasksData[] ;
        } catch (error) {
            console.error(error);
            throw new Error("error al obtener la tarea en la db");
        }  
    }

    static obtenerTareaPorId = async (id: number): Promise<TasksData| undefined> =>{
        try {
            const query = 'SELECT * FROM tasks WHERE task_id = ?';
            const [rows] = await pool.query<TasksData[] & RowDataPacket[]>(query, [id]);

        if (rows .length > 0) {
        return rows[0] as TasksData;
        }
            return undefined;
           
        } catch (error) {
            console.error(error);
            throw new Error("error al obtener a tarea pr id  en la db");
        }
    }

    static crearTarea = async (data :NuevaTask) : Promise<TasksData> =>{
        try {
            const query = 'INSERT INTO tasks(titulo,descripcion,completada,fecha_creacion) VALUES(?,?,?,?)';
            const values = [data.titulo,data.descripcion,data.completada,data.fecha_creacion];

             const [rows] = await pool.query<ResultSetHeader>(query,values);
            return {task_id : rows.insertId , ...data};
        } catch (error) {
            console.error(error);
            throw new Error("error al crear la tarea  en la db");
        }
    }

    static eliminarTarea = async(id: number ) : Promise<boolean> =>{
        try {
            const query = 'DELETE FROM tasks WHERE task_id = ?';
            const [rows] = await pool.query<ResultSetHeader>(query[id]);

            return rows.affectedRows === 1 ;
        } catch (error) {
            console.error(error);
            throw new Error("error al eliminar la tarea  en la db");
        }
    }

    static actualizarTarea = async (id:number , data :NuevaTask): Promise<boolean> =>{
        try {
            const query = 'UPDATE tasks SET titulo = ? , descripcion = ?, completada = ?, fecha_creacion = ? WHERE task_id = ?';
            const values = [data.titulo,data.descripcion,data.completada,data.fecha_creacion,id];
            const [rows] = await pool.query<ResultSetHeader>(query,values);
            return rows.affectedRows === 1 ;
        } catch (error) {
            console.error(error);
            throw new Error("error al actualizar la tarea  en la db");
        }
    }
}