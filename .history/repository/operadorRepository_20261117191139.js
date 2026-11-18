import {conexao} from "../database/conexao.js";

export async function cadastrar(operador){
    const sql = "INSERT INTO operador (nome, matricula, turno) VALUES (?,?,?)";
    const [resultado] = await conexao.execute(sql,[
        operador.nome,
        operador.matricula,
        operador.turno
    ]);
    return resultado.insertId;
}

export async function listar(params) {
    
}