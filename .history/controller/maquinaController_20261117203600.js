import { maquina } from "../model/maquina.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/maquinaRepository.js"

export async function cadastrarmaquina(req,res) {
    try{
        const{ nome, patrimonio, status} = req.body;
        if(!nome || !patrimonio || !status)
            return res.status(400).json({
            mensagem: "Nome, patrimonio e status são obrigatórias"
        });

        const maquinaaquina = new maquina(null,  nome, patrimonio, status);

        const id = await cadastrar(maquina);

        res.status(201).json({
            mensagem:"maquina cadastrada com sucesso",
            id_maquina: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar maquina: " + erro
        })
    }
}
export async function listarmaquina (req, res){
    try{
    const listaDemaquina = await listar();

    res.status(200).json(listaDemaquina );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar maquina: " + erro
        })
    }
}
export async function atualizarmaquina (req, res){
    try{
        const id = Number(req.params.id);

        const maquina = await buscarPorId(id);

        if(!maquina){
            return res.status(404).json({mensagem: "maquina não encontrado"});
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
                mensagem:"Erro ao atualizar maquina, nenhum maquina atualizado"
            });
        }

        return res.status(200).json({mensagem: "maquina atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar maquina: " + erro
        });
    }
}
export async function deletarmaquina(req, res){
    try{
    const id = Number(req.params.id);

    const maquina = await buscarPorId(id);

    if(!maquina){
        return res.status(404).json({mensagem: "maquina não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum maquina deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar maquina: " + erro});
    }
}