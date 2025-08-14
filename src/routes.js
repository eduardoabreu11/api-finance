import { Router } from "express";
import controllerUsuario from "./controllers/controller.usuario.js";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerLancamento from "./controllers/controller.lancamentos.js";
import jwt from"./token.js"

const router = Router();

// usuarios
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios/registro", controllerUsuario.Inserir);
router.get("/usuarios",jwt.ValidateJwt, controllerUsuario.Perfil);
router.put("/usuarios",jwt.ValidateJwt, controllerUsuario.Editar);
router.put("/usuarios/password",jwt.ValidateJwt, controllerUsuario.Senha);


//lançamento

router.get("/lancamentos/resumo",jwt.ValidateJwt, controllerLancamento.Resumo);
router.get("/lancamentos",jwt.ValidateJwt, controllerLancamento.Listar);
router.post("/lancamentos",jwt.ValidateJwt, controllerLancamento.Inserir);
router.put("/lancamentos/:id_lancamento",jwt.ValidateJwt, controllerLancamento.Editar);
router.delete("/lancamentos/:id_lancamento",jwt.ValidateJwt, controllerLancamento.Excluir);




//categorias

router.get("/categorias", jwt.ValidateJwt,  controllerCategoria.Listar);
router.post("/categorias", jwt.ValidateJwt,  controllerCategoria.Inserir);
router.put("/categorias/:id_categoria", jwt.ValidateJwt,  controllerCategoria.Editar);
router.delete("/categorias/:id_categoria", jwt.ValidateJwt,  controllerCategoria.Excluir);



export default router;