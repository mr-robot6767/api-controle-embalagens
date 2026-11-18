
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
export async function atualizar(id,operador){
    const sql = "UPDATE operador SET nome =?,matricula = ?,turno = ?, WHERE id_operador = ? "
    const [resultado] = await conexao.execute(sql, [
        analista.nome,
        analista.registro,
        analista.especialidade,
        id
    ]);

    return resultado.affectedRows;
}
export async function deletar(id) {
    const sql = "DELETE FROM operador WHERE id_analista = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}