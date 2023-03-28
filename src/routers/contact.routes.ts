import { Router } from "express";
import {contatoGetIdController, CreateContactControler, deleteContactControler,
} from "../controller/clienteAndContato.controller";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";
import { authContatoMiddleware, authDeleteMiddleware, decodeGetContatos } from "../middlewares/decodeToken.middlewares";

export const routerContatos = Router();

routerContatos.post("/",verifyTokenMiddlewares,authContatoMiddleware,verifyEmailMiddlewares,CreateContactControler);

routerContatos.patch("/:id",verifyTokenMiddlewares,authDeleteMiddleware,CreateContactControler);

routerContatos.delete("/:id", verifyTokenMiddlewares,authDeleteMiddleware,deleteContactControler);

routerContatos.get("/:id", verifyTokenMiddlewares, authContatoMiddleware,contatoGetIdController);

routerContatos.get("", verifyTokenMiddlewares, decodeGetContatos);
