# Template de Projeto para Freelancer

Este é o meu **template base** para projetos backend com **Node.js**. Foi desenvolvido para acelerar o início de novos projetos, garantindo uma estrutura limpa, organizada e pronta para produção.

## 🚀 Tecnologias Utilizadas

- **Node.js** — Motor de execução JavaScript
- **Express** — Framework para criação de APIs REST
- **SQLite** — Base de dados leve e sem servidor
- **Git** — Controlo de versão
- **GitHub** — Repositório remoto
- **Makefile** — Automação de tarefas

## 📁 Estrutura do Projeto

```
src/
  core/       - Regras de negócio (lógica pura)
  infra/      - Infraestrutura (base de dados, serviços externos)
  interfaces/ - Controladores e rotas (entrada da API)
  shared/     - Utilitários, logs e configurações
tests/
  unit/       - Testes unitários
  integration/ - Testes de integração
docs/adr/    - Decisões arquiteturais (Architecture Decision Records)
data/        - Base de dados SQLite
```

## 🔧 Como Começar

1. Clone este template:
   ```bash
   git clone https://github.com/Serggius/template.git
   cd template
   ```

2. Execute o setup:
   ```bash
   make setup
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite .env com as suas configurações
   ```

4. Inicie o servidor:
   ```bash
   make dev
   ```

## 📋 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/users` | Criar um novo utilizador |
| `GET` | `/users` | Listar todos os utilizadores |
| `GET` | `/users/:id` | Buscar um utilizador por ID |
| `PUT` | `/users/:id` | Atualizar um utilizador |
| `DELETE` | `/users/:id` | Remover um utilizador |

## 🧪 Como Testar

```bash
make test
```

## 📚 Documentação Completa

Consulte o ficheiro [API.md](API.md) para a documentação detalhada da API.

## 👤 Autor

**Sérgio Almeida (Zucatec)**

- GitHub: [@Serggius](https://github.com/Serggius)
- LinkedIn: [Sérgio Zucatec](https://www.linkedin.com/in/sergiozucatec)
- WhatsApp: [@ZucaTec](https://wa.me/351928212041)

---

**Última atualização:** Agosto de 2026