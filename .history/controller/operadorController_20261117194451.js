import { Operador } from "../model/operador";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/operadorRepository.js"

export async function cadastrarOperador(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const operador = new Operador(null, nome, matricula, turno);

        const id = await cadastrar(operador);

        res.status(201).json({
            mensagem:"Operador cadastrado com sucesso",
            id_operador: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar operador: " + erro
        })
    }
}
export async function listarAnalistas (req, res){
    try{
    const listaDeAnalistas = await listar();

    res.status(200).json(listaDeAnalistas );
    }catch(erro){
        res.status(500).json({
            mensagem:"Erro ao listar analistas: " + erro
        })
    }
}
    
