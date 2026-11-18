import express from "express";
import { cadastrarEmbalagens, 
    listarEmbalacadastrarEmbalagens,
    buscarEmbalacadastrarEmbalagensPorId,
    atualizarEmbalacadastrarEmbalagens,
    deletarEmbalacadastrarEmbalagens 
} from "../controller/EmbalacadastrarEmbalagensController.js"; 

const router = express.Router();

router.post("/", cadastrarEmbalagens);
router.get("/", listarEmbalacadastrarEmbalagens);
router.get("/:id", buscarEmbalacadastrarEmbalagensPorId);
router.patch("/:id", atualizarEmbalacadastrarEmbalagens);
router.delete("/:id", deletarEmbalacadastrarEmbalagens);

export default router;