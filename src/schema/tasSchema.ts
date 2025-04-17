import { z } from 'zod';


const nuevaTaskSchema = z.object({
  titulo: z.string().min(1),
  descripcion: z.string().min(1),
  completada: z.boolean(),
  fecha_creacion: z.string() 
});


export const validarTask = (data:any)  => {
  const result = nuevaTaskSchema.safeParse(data);

  if (!result.success) {
    return { valid: false, errors: result.error.format()};
  }
  return { valid: true, data: result.data };
};
