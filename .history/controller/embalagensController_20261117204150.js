import { Embalagens } from "../model/embalagens.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/embalagensRepository.js"

export async function cadastrarE(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const E = new E(null, nome, matricula, turno);

        const id = await cadastrar(E);

        res.status(201).json({
            mensagem:"E cadastrado com sucesso",
            id_E: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar E: " + erro
        })
    }
}
export async function listarE (req, res){
    try{
    const listaDeE = await listar();

    res.status(200).json(listaDeE );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar E: " + erro
        })
    }
}
export async function atualizarE (req, res){
    try{
        const id = Number(req.params.id);

        const E = await buscarPorId(id);

        if(!E){
            return res.status(404).json({mensagem: "E não encontrado"});
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined){
            E.nome = nome;
        }

        if(matricula !== undefined){
            E.matricula = matricula;
        }

        if(turno !== undefined){
            E.turno = turno;
        }

        const resultado = await atualizar(id, E);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar E, nenhum E atualizado"
            });
        }

        return res.status(200).json({mensagem: "E atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar E: " + erro
        });
    }
}
export async function deletarE(req, res){
    try{
    const id = Number(req.params.id);

    const E = await buscarPorId(id);

    if(!E){
        return res.status(404).json({mensagem: "E não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum E deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar E: " + erro});
    }
}