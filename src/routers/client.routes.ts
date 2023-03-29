import { Router } from "express";

import {
  clientGetController,
  createUserController,
  deleteClientControler,
  getClienteController,
  updateClienteControler,
} from "../controller/clienteAndContato.controller";
import { authClienteMiddleware } from "../middlewares/decodeToken.middlewares";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTextMiddleware } from "../middlewares/textSerializer.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";
import { ClienteSerializer } from "../serializer/cliente.serializer";

export const routerCliente = Router();

routerCliente.post(
  "",
  verifyTextMiddleware(ClienteSerializer),
  verifyEmailMiddlewares,
  createUserController
);
routerCliente.get("", verifyTokenMiddlewares, getClienteController);
routerCliente.get(
  "/:id",
  verifyTokenMiddlewares,
  authClienteMiddleware,
  clientGetController
);
routerCliente.patch(
  "/:id",
  verifyTokenMiddlewares,
  authClienteMiddleware,
  updateClienteControler
);
routerCliente.delete(
  "/:id",
  verifyTokenMiddlewares,
  authClienteMiddleware,
  deleteClientControler
);
