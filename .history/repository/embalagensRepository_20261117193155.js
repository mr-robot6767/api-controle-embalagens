
import {conexao} from "../database/conexao.js";

export async function cadastrar(Embalagens){
    const sql = "INSERT INTO Embalagens (nome, patrimonio, status) VALUES (?,?,?)";
    const [resultado] = await conexao.execute(sql,[
        Embalagens.nome,
        Embalagens.patrimonio,
        Embalagens.status
    ]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM Embalagens";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}
export async function buscarPorId(id){
    const sql = "SELECT * FROM Embalagens WHERE id_Embalagens = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0]
}
export async function atualizar(id,Embalagens){
    const sql = "UPDATE Embalagens SET nome =?,patrimonio = ?,status = ?, WHERE id_Embalagens = ? "
    const [resultado] = await conexao.execute(sql, [
        Embalagens.nome,
        Embalagens.registro,
        Embalagens.especialidade,
        id
    ]);

    return resultado.affectedRows;
}
export async function deletar(id) {
    const sql = "DELETE FROM Embalagens WHERE id_Embalagens = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}