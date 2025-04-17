export interface TasksData {
    task_id : number,
    titulo : string,
    descripcion : string,
    completada : boolean,
    fecha_creacion : string
}

export type NuevaTask = Omit<TasksData, 'task_id'>;