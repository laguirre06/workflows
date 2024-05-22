// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo express
const app = express();

// Define a porta na qual o servidor vai escutar
const PORT = process.env.PORT || 8080;

// Define uma rota para o caminho raiz ('/') que responde com 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Faz o aplicativo escutar na porta especificada
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});