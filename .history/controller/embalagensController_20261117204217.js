import { Embalagens } from "../model/embalagens.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/embalagensRepository.js"

export async function cadastrarEmbalagens(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const embalagens = new embalagens(null, nome, matricula, turno);

        const id = await cadastrar(embalagens);

        res.status(201).json({
            mensagem:"embalagens cadastrado com sucesso",
            id_embalagens: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar embalagens: " + erro
        })
    }
}
export async function listarEmbalagens (req, res){
    try{
    const listaDeembalagens = await listar();

    res.status(200).json(listaDeembalagens );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar embalagens: " + erro
        })
    }
}
export async function atualizarEmbalagens (req, res){
    try{
        const id = Number(req.params.id);

        const embalagens = await buscarPorId(id);

        if(!embalagens){
            return res.status(404).json({mensagem: "embalagens não encontrado"});
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined){
            embalagens.nome = nome;
        }

        if(matricula !== undefined){
            embalagens.matricula = matricula;
        }

        if(turno !== undefined){
            embalagens.turno = turno;
        }

        const resultado = await atualizar(id, embalagens);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar embalagens, nenhum embalagens atualizado"
            });
        }

        return res.status(200).json({mensagem: "embalagens atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar embalagens: " + erro
        });
    }
}
export async function deletarembalagens(req, res){
    try{
    const id = Number(req.params.id);

    const embalagens = await buscarPorId(id);

    if(!embalagens){
        return res.status(404).json({mensagem: "embalagens não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum embalagens deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar embalagens: " + erro});
    }
}