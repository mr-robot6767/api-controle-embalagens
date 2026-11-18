
import {conexao} from "../database/conexao.js";

export async function cadastrar(embalagens){
    const sql = "INSERT INTO embalagens (nome, patrimonio, status) VALUES (?,?,?)";
    const [resultado] = await conexao.execute(sql,[
        embalagens.nome,
        embalagens.patrimonio,
        embalagens.status
    ]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM embalagens";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}
export async function buscarPorId(id){
    const sql = "SELECT * FROM embalagens WHERE id_embalagens = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0]
}
export async function atualizar(id,embalagens){
    const sql = "UPDATE embalagens SET nome =?,patrimonio = ?,status = ?, WHERE id_embalagens = ? "
    const [resultado] = await conexao.execute(sql, [
        embalagens.nome,
        embalagens.registro,
        embalagens.especialidade,
        id
    ]);

    return resultado.affectedRows;
}
export async function deletar(id) {
    const sql = "DELETE FROM embalagens WHERE id_embalagens = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}