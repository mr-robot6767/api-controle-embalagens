
import {conexao} from "../database/conexao.js";

export async function cadastrar(embala){
    const sql = "INSERT INTO embala (nome, patrimonio, status) VALUES (?,?,?)";
    const [resultado] = await conexao.execute(sql,[
        embala.nome,
        embala.patrimonio,
        embala.status
    ]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM embala";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}
export async function buscarPorId(id){
    const sql = "SELECT * FROM embala WHERE id_embala = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0]
}
export async function atualizar(id,embala){
    const sql = "UPDATE embala SET nome =?,patrimonio = ?,status = ?, WHERE id_embala = ? "
    const [resultado] = await conexao.execute(sql, [
        embala.nome,
        embala.registro,
        embala.especialidade,
        id
    ]);

    return resultado.affectedRows;
}
export async function deletar(id) {
    const sql = "DELETE FROM embala WHERE id_embala = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}