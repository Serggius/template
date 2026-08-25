# API de Gestão de Utilizadores

## Base URL
http://localhost:3000

## Endpoints

### Criar utilizador
- **POST** /users
- **Body:** {"name": "João Silva", "email": "joao@email.com"}
- **Resposta:** {"id":1,"name":"João Silva","email":"joao@email.com"}

### Listar utilizadores
- **GET** /users
- **Resposta:** [{"id":1,"name":"João Silva","email":"joao@email.com"}]

### Buscar utilizador por ID
- **GET** /users/:id
- **Resposta:** {"id":1,"name":"João Silva","email":"joao@email.com"}

### Atualizar utilizador
- **PUT** /users/:id
- **Body:** {"name":"Maria Silva","email":"maria@email.com"}
- **Resposta:** {"message":"Utilizador atualizado com sucesso"}

### Remover utilizador
- **DELETE** /users/:id
- **Resposta:** {"message":"Utilizador removido com sucesso"}

## Erros Comuns
- 400 Bad Request: Dados inválidos
- 404 Not Found: Utilizador não encontrado
- 409 Conflict: Email já cadastrado
- 500 Internal Server Error: Erro interno
