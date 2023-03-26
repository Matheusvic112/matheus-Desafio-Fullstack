import { Router } from "express";
import {contatoGetIdController,CreateContatoControler,deleteContatoControler,
 updateContatoControler,
} from "../controller/clienteAndContato.controller";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";
import { authContatoMiddleware, authDeleteMiddleware, decodeGetContatos } from "../middlewares/decodeToken.middlewares";

export const routerContatos = Router();

routerContatos.post("/",verifyTokenMiddlewares,authContatoMiddleware,verifyEmailMiddlewares,CreateContatoControler);

routerContatos.patch("/:id",verifyTokenMiddlewares,authDeleteMiddleware,updateContatoControler);

routerContatos.delete("/:id", verifyTokenMiddlewares,authDeleteMiddleware,deleteContatoControler);

routerContatos.get("/:id", verifyTokenMiddlewares, authContatoMiddleware,contatoGetIdController);

routerContatos.get("", verifyTokenMiddlewares, decodeGetContatos);
