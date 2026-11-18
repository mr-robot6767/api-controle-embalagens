import { Embalagens } from "../model/embalagens.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/embalagensRepository.js"

export async function cadastrarem(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const em = new em(null, nome, matricula, turno);

        const id = await cadastrar(em);

        res.status(201).json({
            mensagem:"em cadastrado com sucesso",
            id_em: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar em: " + erro
        })
    }
}
export async function listarem (req, res){
    try{
    const listaDeem = await listar();

    res.status(200).json(listaDeem );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar em: " + erro
        })
    }
}
export async function atualizarem (req, res){
    try{
        const id = Number(req.params.id);

        const em = await buscarPorId(id);

        if(!em){
            return res.status(404).json({mensagem: "em não encontrado"});
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined){
            em.nome = nome;
        }

        if(matricula !== undefined){
            em.matricula = matricula;
        }

        if(turno !== undefined){
            em.turno = turno;
        }

        const resultado = await atualizar(id, em);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar em, nenhum em atualizado"
            });
        }

        return res.status(200).json({mensagem: "em atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar em: " + erro
        });
    }
}
export async function deletarem(req, res){
    try{
    const id = Number(req.params.id);

    const em = await buscarPorId(id);

    if(!em){
        return res.status(404).json({mensagem: "em não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum em deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar em: " + erro});
    }
}