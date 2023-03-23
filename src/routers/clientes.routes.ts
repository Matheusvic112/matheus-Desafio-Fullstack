import { Router } from "express";
import '../@types/express'

import {
  clienteGetController,
  createUserController,
  deleteClienteControler,
  getClienteController,
  updateClienteControler,
} from "../controller/clienteAndContato.controller";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";

export const routerCliente = Router();

routerCliente.post("", verifyEmailMiddlewares, createUserController);
routerCliente.get("", verifyTokenMiddlewares, getClienteController);
routerCliente.get("/:id",verifyTokenMiddlewares, clienteGetController);
routerCliente.patch("/:id", verifyTokenMiddlewares, updateClienteControler);
routerCliente.delete("/:id", verifyTokenMiddlewares, deleteClienteControler);
