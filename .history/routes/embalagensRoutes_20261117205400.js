import express from "express";
import { cadastrarEmbalag, 
    listarEmbalag,
    buscarEmbalagPorId,
    atualizarEmbalag,
    deletarEmbalag 
} from "../controller/EmbalagController.js"; 

const router = express.Router();

router.post("/", cadastrarEmbalag);
router.get("/", listarEmbalag);
router.get("/:id", buscarEmbalagPorId);
router.patch("/:id", atualizarEmbalag);
router.delete("/:id", deletarEmbalag);

export default router;