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
    const analista = new Analista(null, nome, registro, especialidade);

    const id = await cadastrar(analista);

    res.status(201).json({
        mensagem:"Analista cadastrado com sucesso",
        id_analista: id
    });
    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar analista: " + erro
        })
    }
}
    
