import { Maquina } from "../model/maquina.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/maquinaRepository.js"

export async function cadastrarMaquina(req,res) {
    try{
        const{ nome, patrimonio, status} = req.body;
        if(!nome || !patrimonio || !status)
            return res.status(400).json({
            mensagem: "Nome, patrimonio e status são obrigatórias"
        });

        const maquina = new maquina(null,  nome, patrimonio, status);

        const id = await cadastrar(Maquina);

        res.status(201).json({
            mensagem:"Maquina cadastrada com sucesso",
            id_Maquina: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar Maquina: " + erro
        })
    }
}
export async function listarMaquina (req, res){
    try{
    const listaDeMaquina = await listar();

    res.status(200).json(listaDeMaquina );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar Maquina: " + erro
        })
    }
}
export async function atualizarMaquina (req, res){
    try{
        const id = Number(req.params.id);

        const maquina = await buscarPorId(id);

        if(!maquina){
            return res.status(404).json({mensagem: "Maquina não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            maquina.nome = nome;
        }

        if(registro !== undefined){
            maquina.registro = registro;
        }

        if(especialidade !== undefined){
            maquina.especialidade = especialidade;
        }

        const resultado = await atualizar(id, maquina);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar Maquina, nenhum Maquina atualizado"
            });
        }

        return res.status(200).json({mensagem: "Maquina atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar Maquina: " + erro
        });
    }
}
export async function deletarMaquina(req, res){
    try{
    const id = Number(req.params.id);

    const maquina = await buscarPorId(id);

    if(!maquina){
        return res.status(404).json({mensagem: "Maquina não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum Maquina deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar Maquina: " + erro});
    }
}