import express from "express";
import { cadastrarOperador, 
    listarOperador,
    buscarOperadorPorId,
    atualizarOperador,
    deletarAnalista 
} from "../controller/operadorController.js"; 

const router = express.Router();

router.post("/", cadastrarAnalista);
router.get("/", listarAnalistas);
router.get("/:id", buscarAnalistaPorId);
router.patch("/:id", atualizarAnalista);
router.delete("/:id", deletarAnalista);

export default router;