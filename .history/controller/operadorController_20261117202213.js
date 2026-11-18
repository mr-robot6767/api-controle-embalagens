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

        const Operador = await buscarPorId(id);

        if(!Operador){
            return res.status(404).json({mensagem: "Operador não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            Operador.nome = nome;
        }

        if(registro !== undefined){
            Operador.registro = registro;
        }

        if(especialidade !== undefined){
            Operador.especialidade = especialidade;
        }

        const resultado = await atualizar(id, Operador);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar Operador, nenhum Operador atualizado"
            });
        }

        return res.status(200).json({mensagem: "Operador atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar Operador: " + erro
        });
    }
}
