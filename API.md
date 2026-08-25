\# API de Gestão de Utilizadores



\## 📋 Visão Geral



API REST para gestão de utilizadores, desenvolvida com Node.js, Express e SQLite.



\## 🔗 Base URL



`http://localhost:3000`



\## 📦 Endpoints



\---



\### 1. Criar utilizador

\*\*POST\*\* `/users`



\*\*Body (JSON):\*\*

`{ "name": "João Silva", "email": "joao@email.com" }`



\*\*Resposta (sucesso):\*\*

`{ "id": 1, "name": "João Silva", "email": "joao@email.com" }`



\*\*Resposta (erro):\*\*

`{ "error": "Email já cadastrado" }`



\---



\### 2. Listar utilizadores

\*\*GET\*\* `/users`



\*\*Resposta (sucesso):\*\*

`\[ { "id": 1, "name": "João Silva", "email": "joao@email.com" } ]`



\---



\### 3. Buscar utilizador por ID

\*\*GET\*\* `/users/:id`



\*\*Exemplo:\*\* `GET /users/1`



\*\*Resposta (sucesso):\*\*

`{ "id": 1, "name": "João Silva", "email": "joao@email.com" }`



\*\*Resposta (erro):\*\*

`{ "error": "Utilizador não encontrado" }`



\---



\### 4. Atualizar utilizador

\*\*PUT\*\* `/users/:id`



\*\*Exemplo:\*\* `PUT /users/1`



\*\*Body (JSON):\*\*

`{ "name": "Maria Silva", "email": "maria@email.com" }`



\*\*Resposta (sucesso):\*\*

`{ "message": "Utilizador atualizado com sucesso" }`



\*\*Resposta (erro):\*\*

`{ "error": "Utilizador não encontrado" }`



\---



\### 5. Remover utilizador

\*\*DELETE\*\* `/users/:id`



\*\*Exemplo:\*\* `DELETE /users/1`



\*\*Resposta (sucesso):\*\*

`{ "message": "Utilizador removido com sucesso" }`



\*\*Resposta (erro):\*\*

`{ "error": "Utilizador não encontrado" }`



\---



\## ⚠️ Códigos de Erro Comuns



| Código | Significado |

|--------|-------------|

| `400` | Dados inválidos (email sem '@', campos obrigatórios) |

| `404` | Utilizador não encontrado |

| `409` | Email já cadastrado |

| `500` | Erro interno do servidor |



\---



\## 🧪 Como Testar (Exemplo com PowerShell)



```bash

\# Criar utilizador

$body = @{ name = "João Silva"; email = "joao@email.com" } | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Body $body -ContentType "application/json" -UseBasicParsing



\# Listar utilizadores

Invoke-WebRequest -Uri http://localhost:3000/users -Method GET -UseBasicParsing



\# Buscar utilizador

Invoke-WebRequest -Uri http://localhost:3000/users/1 -Method GET -UseBasicParsing



\# Atualizar utilizador

$body = @{ name = "Maria Silva"; email = "maria@email.com" } | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/users/1 -Method PUT -Body $body -ContentType "application/json" -UseBasicParsing



\# Remover utilizador

Invoke-WebRequest -Uri http://localhost:3000/users/1 -Method DELETE -UseBasicParsing

