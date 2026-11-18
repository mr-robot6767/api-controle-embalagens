
import {conexao} from "../database/conexao.js";

export async function cadastrar(embalagens){
    const sql = "INSERT INTO embalagens (descricao, material, capacidade) VALUES (?,?,?)";
    const [resultado] = await conexao.execute(sql,[
        embalagens.descricao,
        embalagens.material,
        embalagens.capacidade
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
    const sql = "UPDATE embalagens SET descricao =?,material = ?,capacidade = ?, WHERE id_embalagens = ? "
    const [resultado] = await conexao.execute(sql, [
        embalagens.descricao,
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