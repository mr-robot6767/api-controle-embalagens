import express from "express";
    import maquinaRoutes from "./routes/maquinaRoutes.js";
    import operadorRoutes from "./routes/operadorRoutes.js";
    import embalagensRoutes from "./routes/embalagensRoutes.js";
import conexao from "./database/conexao.js";

const app = express();
const PORT = process.env.PORT || 3000;  

app.use(express.json());
app.use("/operador", operadorRoutes);
app.use("/maquina", maquinaRoutes);
app.use("/embalagens", equipamentoRoutes);
async function iniciarServidor() {
    try {
        const conexaoTest = await conexao.getConnection();
        conexaoTest.release();  

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro) {
        console.log("Erro ao conectar o banco de dados");
        console.log(erro.message); 
        process.exit(1);
    }
}
iniciarServidor();