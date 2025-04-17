import { Router } from "express";
import { taskController } from "../controller/taskController";

const router = Router();

router.get('/',taskController.obtenerTarea);
router.get('/:id',taskController.otenerTareaPorId);
router.post('/',taskController.createTarea);
router.put('/:id',taskController.updateTarea);
router.delete('/:id', taskController.deleteTarea)


export default router;