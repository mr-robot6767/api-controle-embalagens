import express from "express";
import { cadastrarOperador, 
    listarOperador,
    buscarOperadorPorId,
    atualizarOperador,
    deletarOperador 
} from "../controller/operadorController.js"; 

const router = express.Router();

router.post("/", cadastrarOperador);
router.get("/", listarOperadors);
router.get("/:id", buscarOperadorPorId);
router.patch("/:id", atualizarOperador);
router.delete("/:id", deletarOperador);

export default router;