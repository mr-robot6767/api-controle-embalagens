import { M } from "../model/maquina.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/maquinaRepository.js"

export async function cadastrarM(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const M = new M(null, nome, matricula, turno);

        const id = await cadastrar(M);

        res.status(201).json({
            mensagem:"M cadastrado com sucesso",
            id_M: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar M: " + erro
        })
    }
}
export async function listarM (req, res){
    try{
    const listaDeM = await listar();

    res.status(200).json(listaDeM );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar M: " + erro
        })
    }
}
export async function atualizarM (req, res){
    try{
        const id = Number(req.params.id);

        const M = await buscarPorId(id);

        if(!M){
            return res.status(404).json({mensagem: "M não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            M.nome = nome;
        }

        if(registro !== undefined){
            M.registro = registro;
        }

        if(especialidade !== undefined){
            M.especialidade = especialidade;
        }

        const resultado = await atualizar(id, M);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar M, nenhum M atualizado"
            });
        }

        return res.status(200).json({mensagem: "M atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar M: " + erro
        });
    }
}
export async function deletarM(req, res){
    try{
    const id = Number(req.params.id);

    const M = await buscarPorId(id);

    if(!M){
        return res.status(404).json({mensagem: "M não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum M deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar M: " + erro});
    }
}