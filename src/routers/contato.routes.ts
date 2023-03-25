import { Router } from "express";
import {contatoGetIdController,CreateContatoControler,deleteContatoControler,getContatoController,
 updateContatoControler,
} from "../controller/clienteAndContato.controller";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";
import { authContatoMiddleware, authDeleteMiddleware } from "../middlewares/decodeToken.middlewares";
import { verifyTextMiddleware } from "../middlewares/textSerializer.middlewares";
import { ClienteSerializer } from "../serializer/cliente.serializer";

export const routerContatos = Router();

routerContatos.post("/",verifyTextMiddleware(ClienteSerializer) ,verifyTokenMiddlewares,authContatoMiddleware,verifyEmailMiddlewares,CreateContatoControler);

routerContatos.patch("/:id",verifyTokenMiddlewares,authDeleteMiddleware,updateContatoControler);

routerContatos.delete("/:id", verifyTokenMiddlewares,authDeleteMiddleware,deleteContatoControler);

routerContatos.get("/:id", verifyTokenMiddlewares, authContatoMiddleware,contatoGetIdController);

routerContatos.get("", verifyTokenMiddlewares,getContatoController);
