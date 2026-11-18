import express from "express";
import { cadastrarEmbalagens, 
    listarEmbalagens,
    buscarEmbalagensPorId,
    atualizarEmbalagens,
    deletarEmbalagens 
} from "../controller/EmbalagensController.js"; 

const router = express.Router();

router.post("/", cadastrarEmbalagens);
router.get("/", listarEmbalagens);
router.get("/:id", buscarEmbalagensPorId);
router.patch("/:id", atualizarEmbalagens);
router.delete("/:id", deletarEmbalagens);

export default router;