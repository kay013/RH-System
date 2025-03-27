const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dados simulados (em breve conectaremos a um banco de dados)
let funcionarios = [
    { id: 1, nome: "Carlos Silva", cargo: "Gerente", email: "carlos@email.com" },
    { id: 2, nome: "Ana Souza", cargo: "Analista de RH", email: "ana@email.com" }
];

let vagas = [
    { id: 1, titulo: "Desenvolvedor Front-end" },
    { id: 2, titulo: "Analista de Marketing" },
    { id: 3, titulo: "Gerente de Projetos" }
];

// Rota para obter funcionários
app.get('/funcionarios', (req, res) => {
    res.json(funcionarios);
});

// Rota para obter vagas
app.get('/vagas', (req, res) => {
    res.json(vagas);
});

// Rota para login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    if (email === "admin@email.com" && senha === "1234") {
        res.json({ success: true, message: "Login bem-sucedido!" });
    } else {
        res.status(401).json({ success: false, message: "Credenciais inválidas!" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
