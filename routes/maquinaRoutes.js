import express from "express";
import { cadastrarMaquina, 
    listarMaquina,
    buscarMaquinaPorId,
    atualizarMaquina,
    deletarMaquina 
} from "../controller/maquinaController.js"; 

const router = express.Router();

router.post("/", cadastrarMaquina);
router.get("/", listarMaquina);
router.get("/:id", buscarMaquinaPorId);
router.patch("/:id", atualizarMaquina);
router.delete("/:id", deletarMaquina);

export default router;