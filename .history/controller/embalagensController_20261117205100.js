import { Embalagens } from "../model/embalagens.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/embalagensRepository.js"

export async function cadastrarEmbalagens(req,res) {
    try{
        const{descricao, material, capacidade} = req.body;
        if(!descricao || !material || !capacidade)
            return res.status(400).json({
            mensagem: "descricao, material e capacidade são obrigatórias"
        });

        const embalagens = new Embalagens(null, descricao, material, capacidade);

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
export async function buscarEmbalagensPorId(req, res){
    try{
    const id = Number(req.params.id);

    const embalagens = await buscarPorId(id);

    if(!embalagens){
        return res.status(404).json({mensagem: "Embalagens não encontrado"})
    }

    res.status(200).json(embalagens);
    }catch(erro){
        res.status(500).json({
            mensagem:"Erro ao listar embalagens por ID: " + erro
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

        const {descricao, material, capacidade} = req.body;

        if(descricao !== undefined){
            embalagens.descricao = descricao;
        }

        if(material !== undefined){
            embalagens.material = material;
        }

        if(capacidade !== undefined){
            embalagens.capacidade = capacidade;
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
export async function deletarEmbalagens(req, res){
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