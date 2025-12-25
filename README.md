# 🌐 API Finance — Backend em Node.js + Express

API desenvolvida para um sistema de controle financeiro pessoal.  
Fornece autenticação JWT, CRUD de lançamentos, categorias e gerenciamento de usuário.  
Banco de dados local utilizando SQLite3.

---

## 📌 Tecnologias Utilizadas

- Node.js  
- Express  
- SQLite3  
- JWT (jsonwebtoken)  
- bcrypt  
- dotenv  
- CORS  

---

## 📁 Estrutura do Projeto

```
src/
 ├── controllers/
 │     ├── controllerUsuario.js
 │     ├── controllerLancamento.js
 │     └── controllerCategoria.js
 │
 ├── database/
 │     ├── database.db
        └── sqlite.js
 │
 ├── public/
 │     └── (arquivos públicos)
 │
 ├── repositories/
 │     ├── repoUsuario.js
 │     ├── repoLancamento.js
 │     └── repoCategoria.js
 │
 ├── services/
 │     ├── serviceUsuario.js
 │     └── serviceCategoria
 │     └── serviceLancamento
 │
 ├── index.js
 ├──routes.js
 ├──token.js
```

---



### Iniciar o servidor
```bash
node src/index.js
```

Servidor rodará em:

```
http://localhost:3001
```

---

## 🚀 Endpoints da API

### 🔹 **Autenticação & Usuário**

#### **POST /usuarios/login**
Realiza login e retorna token JWT.

#### **POST /usuarios/registro**
Cria conta.

#### **GET /usuarios**
Retorna perfil do usuário logado.  
*Requer JWT.*

#### **PUT /usuarios**
Edita dados do usuário.  
*Requer JWT.*

#### **PUT /usuarios/password**
Altera senha.  
*Requer JWT.*

---

### 🔹 **Lançamentos (ganhos e despesas)**

#### **GET /lancamentos/resumo**
Retorna resumo mensal: ganhos, gastos e saldo.  
*Requer JWT.*

#### **GET /lancamentos**
Lista todos lançamentos do usuário.  
*Requer JWT.*

#### **GET /lancamentos/:id_lancamento**
Busca por ID.  
*Requer JWT.*

#### **POST /lancamentos**
Cria lançamento.  
*Requer JWT.*

#### **PUT /lancamentos/:id_lancamento**
Edita lançamento.  
*Requer JWT.*

#### **DELETE /lancamentos/:id_lancamento**
Exclui lançamento.  
*Requer JWT.*

---

### 🔹 **Categorias**

#### **GET /categorias/icones**
Retorna lista de ícones.  
*Requer JWT.*

#### **GET /categorias**
Lista categorias.  
*Requer JWT.*

#### **GET /categorias/:id_categoria**
Busca categoria específica.  
*Requer JWT.*

#### **POST /categorias**
Cria categoria.  
*Requer JWT.*

#### **PUT /categorias/:id_categoria**
Edita categoria.  
*Requer JWT.*

#### **DELETE /categorias/:id_categoria**
Exclui categoria.  
*Requer JWT.*

---

## 📌 Arquivo `index.js`

```javascript
import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("src/public"));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta: " + process.env.PORT);
});
```

---

## 📌 Arquivo `routes.js`

```javascript
import express from "express";
import controllerUsuario from "./controllers/controllerUsuario.js";
import controllerLancamento from "./controllers/controllerLancamento.js";
import controllerCategoria from "./controllers/controllerCategoria.js";
import jwt from "./services/jwt.js";

const router = express.Router();

// Usuários
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios/registro", controllerUsuario.Inserir);
router.get("/usuarios", jwt.ValidateJwt, controllerUsuario.Perfil);
router.put("/usuarios", jwt.ValidateJwt, controllerUsuario.Editar);
router.put("/usuarios/password", jwt.ValidateJwt, controllerUsuario.Senha);

// Lançamentos
router.get("/lancamentos/resumo", jwt.ValidateJwt, controllerLancamento.Resumo);
router.get("/lancamentos", jwt.ValidateJwt, controllerLancamento.Listar);
router.get("/lancamentos/:id_lancamento", jwt.ValidateJwt, controllerLancamento.ListarId);
router.post("/lancamentos", jwt.ValidateJwt, controllerLancamento.Inserir);
router.put("/lancamentos/:id_lancamento", jwt.ValidateJwt, controllerLancamento.Editar);
router.delete("/lancamentos/:id_lancamento", jwt.ValidateJwt, controllerLancamento.Excluir);

// Categorias
router.get("/categorias/icones", jwt.ValidateJwt, controllerCategoria.ListarIcones);
router.get("/categorias", jwt.ValidateJwt, controllerCategoria.Listar);
router.get("/categorias/:id_categoria", jwt.ValidateJwt, controllerCategoria.ListarId);
router.post("/categorias", jwt.ValidateJwt, controllerCategoria.Inserir);
router.put("/categorias/:id_categoria", jwt.ValidateJwt, controllerCategoria.Editar);
router.delete("/categorias/:id_categoria", jwt.ValidateJwt, controllerCategoria.Excluir);

export default router;
```

---

## 🔐 Autenticação JWT

A API utiliza **Bearer Token**:

```
Authorization: Bearer SEU_TOKEN
```

Tokens são gerados no login e possuem validade configurada no arquivo `jwt.js`.

---

## 🧩 Banco de Dados

A API usa **SQLite3** localizado em:

```
src/database/database.db
```

Tabelas:

- usuários
- categorias
- lançamentos

---

## ✨ Desenvolvido por Eduardo Abreu
Projeto completo: Backend + Mobile + Web.
