import express from "express";
import { cadastrarMau, 
    listarMau,
    buscarMauPorId,
    atualizarMau,
    deletarMau 
} from "../controller/maquinaController.js"; 

const router = express.Router();

router.post("/", cadastrarMau);
router.get("/", listarMau);
router.get("/:id", buscarMauPorId);
router.patch("/:id", atualizarMau);
router.delete("/:id", deletarMau);

export default router;