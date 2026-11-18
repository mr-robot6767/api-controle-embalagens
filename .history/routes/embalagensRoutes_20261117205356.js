import express from "express";
import { cadastrarEmbala, 
    listarEmbala,
    buscarEmbalaPorId,
    atualizarEmbala,
    deletarEmbala 
} from "../controller/EmbalaController.js"; 

const router = express.Router();

router.post("/", cadastrarEmbala);
router.get("/", listarEmbala);
router.get("/:id", buscarEmbalaPorId);
router.patch("/:id", atualizarEmbala);
router.delete("/:id", deletarEmbala);

export default router;