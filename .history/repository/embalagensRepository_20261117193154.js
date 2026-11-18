
import {conexao} from "../database/conexao.js";

export async function cadastrar(embal){
    const sql = "INSERT INTO embal (nome, patrimonio, status) VALUES (?,?,?)";
    const [resultado] = await conexao.execute(sql,[
        embal.nome,
        embal.patrimonio,
        embal.status
    ]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM embal";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}
export async function buscarPorId(id){
    const sql = "SELECT * FROM embal WHERE id_embal = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0]
}
export async function atualizar(id,embal){
    const sql = "UPDATE embal SET nome =?,patrimonio = ?,status = ?, WHERE id_embal = ? "
    const [resultado] = await conexao.execute(sql, [
        embal.nome,
        embal.registro,
        embal.especialidade,
        id
    ]);

    return resultado.affectedRows;
}
export async function deletar(id) {
    const sql = "DELETE FROM embal WHERE id_embal = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}