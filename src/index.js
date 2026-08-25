import express from 'express';
import router from './interfaces/routes.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware para logs
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Usar as rotas
app.use('/', router);

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Tratamento de erros genérico
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(port, () => {
  console.log(`🚀 API a rodar em http://localhost:${port}`);
  console.log(`📋 Endpoints disponíveis:`);
  console.log(`  POST   /users     - Criar utilizador`);
  console.log(`  GET    /users     - Listar utilizadores`);
  console.log(`  GET    /users/:id - Buscar utilizador`);
  console.log(`  PUT    /users/:id - Atualizar utilizador`);
  console.log(`  DELETE /users/:id - Remover utilizador`);
});
