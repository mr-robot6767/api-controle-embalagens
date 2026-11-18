import { Operador } from "../model/operador";
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/operadorRepository.js"

export async function cadastrarOperador(req,res) {
    try{
        const{nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno)
            return res.status(400).json({
            mensagem: "Nome, matricula e turno são obrigatórias"
        });

        const operador = new Operador(null, nome, matricula, turno);

        const id = await cadastrar(operador);

        res.status(201).json({
            mensagem:"Operador cadastrado com sucesso",
            id_operador: id
        });

    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar operador: " + erro
        })
    }
}
export async function listarOperador (req, res){
    try{
    const listaDeOperador = await listar();

    res.status(200).json(listaDeOperador );
    }catch(erro){
        res.status(500).json({ 
            mensagem:"Erro ao listar Operador: " + erro
        })
    }
}
export async function atualizarOperador (req, res){
    try{
        const id = Number(req.params.id);

        const operador = await buscarPorId(id);

        if(!operador){
            return res.status(404).json({mensagem: "operador não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            operador.nome = nome;
        }

        if(registro !== undefined){
            operador.registro = registro;
        }

        if(especialidade !== undefined){
            operador.especialidade = especialidade;
        }

        const resultado = await atualizar(id, operador);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar operador, nenhum operador atualizado"
            });
        }

        return res.status(200).json({mensagem: "operador atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar operador: " + erro
        });
    }
}
export async function deletarAnalista(req, res){
    try{
    const id = Number(req.params.id);

    const analista = await buscarPorId(id);

    if(!analista){
        return res.status(404).json({mensagem: "Analista não encontrado"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum Analista deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar analista: " + erro});
    }
}