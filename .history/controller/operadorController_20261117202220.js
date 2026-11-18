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
export async function atualizaroperd (req, res){
    try{
        const id = Number(req.params.id);

        const operd = await buscarPorId(id);

        if(!operd){
            return res.status(404).json({mensagem: "operd não encontrado"});
        }

        const {nome, registro, especialidade} = req.body;

        if(nome !== undefined){
            operd.nome = nome;
        }

        if(registro !== undefined){
            operd.registro = registro;
        }

        if(especialidade !== undefined){
            operd.especialidade = especialidade;
        }

        const resultado = await atualizar(id, operd);

        if(resultado === 0){
            return res.status(404).json({
                mensagem:"Erro ao atualizar operd, nenhum operd atualizado"
            });
        }

        return res.status(200).json({mensagem: "operd atualizado com sucesso"});
    } catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar operd: " + erro
        });
    }
}
