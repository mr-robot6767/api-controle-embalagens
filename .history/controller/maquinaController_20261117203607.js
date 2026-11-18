import { m } from "../model/m.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/mRepository.js"

export async function cadastrarm(req,res) {
    try{
        const{ nome, patrimonio, status} = req.body;
        if(!nome || !patrimonio || !status)
            return res.status(400).json({
            mensagem: "Nome, patrimonio e status são obrigatórias"
        });

        const maquina = new m(null,  nome, patrimonio, status);

        const id = await cadastrar(m);

        res.status(201).json({
            mensagem:"m cadastrada com sucesso",
            id_m: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar m: " + erro
        })
    }
}
export async function listarm (req, res){
    try{
    const listaDem = await listar();

    res.status(200).json(listaDem );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar m: " + erro
        })
    }
}
export async function atualizarm (req, res){
    try{
        const id = Number(req.params.id);

        const m = await buscarPorId(id);

        if(!m){
            return res.status(404).json({mensagem: "m não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            m.nome = nome;
        }

        if(registro !== undefined){
            m.registro = registro;
        }

        if(especialidade !== undefined){
            m.especialidade = especialidade;
        }

        const resultado = await atualizar(id, m);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar m, nenhum m atualizado"
            });
        }

        return res.status(200).json({mensagem: "m atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar m: " + erro
        });
    }
}
export async function deletarm(req, res){
    try{
    const id = Number(req.params.id);

    const m = await buscarPorId(id);

    if(!m){
        return res.status(404).json({mensagem: "m não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum m deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar m: " + erro});
    }
}