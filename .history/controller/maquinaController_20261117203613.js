import {  } from "../model/.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/Repository.js"

export async function cadastrar(req,res) {
    try{
        const{ nome, patrimonio, status} = req.body;
        if(!nome || !patrimonio || !status)
            return res.status(400).json({
            mensagem: "Nome, patrimonio e status são obrigatórias"
        });

        const aquina = new (null,  nome, patrimonio, status);

        const id = await cadastrar();

        res.status(201).json({
            mensagem:" cadastrada com sucesso",
            id_: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar : " + erro
        })
    }
}
export async function listar (req, res){
    try{
    const listaDe = await listar();

    res.status(200).json(listaDe );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar : " + erro
        })
    }
}
export async function atualizar (req, res){
    try{
        const id = Number(req.params.id);

        const  = await buscarPorId(id);

        if(!){
            return res.status(404).json({mensagem: " não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            .nome = nome;
        }

        if(registro !== undefined){
            .registro = registro;
        }

        if(especialidade !== undefined){
            .especialidade = especialidade;
        }

        const resultado = await atualizar(id, );

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar , nenhum  atualizado"
            });
        }

        return res.status(200).json({mensagem: " atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar : " + erro
        });
    }
}
export async function deletar(req, res){
    try{
    const id = Number(req.params.id);

    const  = await buscarPorId(id);

    if(!){
        return res.status(404).json({mensagem: " não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum  deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar : " + erro});
    }
}