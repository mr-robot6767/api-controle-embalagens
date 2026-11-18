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

export async function listar(operador) {
    const sql = "SELECT * FROM operador";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}
export async function buscar