import express from "express";
import { cadastrarEmbalagens, 
    listarEmcadastrarEmbalagens,
    buscarEmcadastrarEmbalagensPorId,
    atualizarEmcadastrarEmbalagens,
    deletarEmcadastrarEmbalagens 
} from "../controller/EmcadastrarEmbalagensController.js"; 

const router = express.Router();

router.post("/", cadastrarEmbalagens);
router.get("/", listarEmcadastrarEmbalagens);
router.get("/:id", buscarEmcadastrarEmbalagensPorId);
router.patch("/:id", atualizarEmcadastrarEmbalagens);
router.delete("/:id", deletarEmcadastrarEmbalagens);

export default router;