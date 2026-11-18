import { } from "../model/maquina.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/maquinaRepository.js"

export async function cadastra(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const = new(null, nome, matricula, turno);

        const id = await cadastrar);

        res.status(201).json({
            mensagem: cadastrado com sucesso",
            id: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar: " + erro
        })
    }
}
export async function lista (req, res){
    try{
    const listaD = await listar();

    res.status(200).json(listaD );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar: " + erro
        })
    }
}
export async function atualiza (req, res){
    try{
        const id = Number(req.params.id);

        const = await buscarPorId(id);

        if(){
            return res.status(404).json({mensagem:  não encontrado"});
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

        const resultado = await atualizar(id,);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar, nenhum atualizado"
            });
        }

        return res.status(200).json({mensagem:  atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar: " + erro
        });
    }
}
export async function deleta(req, res){
    try{
    const id = Number(req.params.id);

    const = await buscarPorId(id);

    if(){
        return res.status(404).json({mensagem:  não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar: " + erro});
    }
}