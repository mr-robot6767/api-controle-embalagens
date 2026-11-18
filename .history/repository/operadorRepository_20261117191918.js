import { FORMERR } from "node:dns";
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

export async function listar() {
    const sql = "SELECT * FROM operador";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}
export async function buscarPorId(id){
    const sql = "SELECT * FROM operador WHERE id_operador = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0]
}
expor async