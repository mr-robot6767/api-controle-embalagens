import express from "express";
import { cadastrarEmbalagn, 
    listarEmbalagn,
    buscarEmbalagnPorId,
    atualizarEmbalagn,
    deletarEmbalagn 
} from "../controller/EmbalagnController.js"; 

const router = express.Router();

router.post("/", cadastrarEmbalagn);
router.get("/", listarEmbalagn);
router.get("/:id", buscarEmbalagnPorId);
router.patch("/:id", atualizarEmbalagn);
router.delete("/:id", deletarEmbalagn);

export default router;