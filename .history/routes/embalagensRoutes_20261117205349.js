import express from "express";
import { cadastrarEm, 
    listarEm,
    buscarEmPorId,
    atualizarEm,
    deletarEm 
} from "../controller/EmController.js"; 

const router = express.Router();

router.post("/", cadastrarEm);
router.get("/", listarEm);
router.get("/:id", buscarEmPorId);
router.patch("/:id", atualizarEm);
router.delete("/:id", deletarEm);

export default router;