const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Servir arquivos estáticos
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/sobre.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/contato.html'));
});

app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/cadastrar.html'));
});

app.get('/entrar', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/entrar.html'));
});

app.get('/game/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/home.html'));
});

app.get('/game/mensagem', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/message.html'));
});

app.get('/game/niveis', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/niveis.html'));
});

app.get('/game/nivel1', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel1.html'));
});

app.get('/game/nivel2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel2.html'));
});

app.get('/game/nivel3', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel3.html'));
});

app.get('/game/nivel4', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel4.html'));
});

app.get('/game/nivel5', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel5.html'));
});

app.get('/game/nivel6', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel6.html'));
});

app.get('/game/nivel7', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel7.html'));
});

app.get('/game/nivel8', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel8.html'));
});

app.get('/game/nivel9', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/nivel9.html'));
});


app.get('/game/ranking', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/ranking.html'));
});


app.get('/game/ajustes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/ajustes.html'));
});



// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
