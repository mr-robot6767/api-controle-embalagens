import express from "express";
    import embalagensRoutes from "./routes/embalagensRoutes.js";
    import ensaioRoutes from "./routes/operadorRoutes.js";
    import equipamentoRoutes from "./routes/embalagensRoutes.js";
import conexao from "./database/conexao.js";

const app = express();
const PORT = process.env.PORT || 3000;  

app.use(express.json());
app.use("/analista", analistaRoutes);
app.use("/ensaio", ensaioRoutes);
app.use("/equipamento", equipamentoRoutes);
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