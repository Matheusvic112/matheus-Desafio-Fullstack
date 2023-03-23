import { Router } from "express";
import { CreateContatoControler, getContatoController, updateContatoControler } from "../controller/clienteAndContato.controller";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";
export const routerContatos = Router();

routerContatos.post('/:id',verifyTokenMiddlewares,verifyEmailMiddlewares,CreateContatoControler  )
routerContatos.patch('/:id',verifyTokenMiddlewares,updateContatoControler )
routerContatos.get('',verifyTokenMiddlewares,getContatoController )