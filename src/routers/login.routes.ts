import { Router } from "express";
import { loginController } from "../controller/clienteAndContato.controller";

export const loginCliente = Router();

loginCliente.post("", loginController);
