import express from "express";
import { cadastrarMaq, 
    listarMaq,
    buscarMaqPorId,
    atualizarMaq,
    deletarMaq 
} from "../controller/maquinaController.js"; 

const router = express.Router();

router.post("/", cadastrarMaq);
router.get("/", listarMaq);
router.get("/:id", buscarMaqPorId);
router.patch("/:id", atualizarMaq);
router.delete("/:id", deletarMaq);

export default router;