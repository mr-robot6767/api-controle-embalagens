import { Operador } from "../model/operador";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/operadorRepository.js"

export async function cadastrarOperador(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });
    }
    }
    
