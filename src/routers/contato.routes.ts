import { Router } from "express";
import '../@types/express'

import { contatoGetIdController, CreateContatoControler, deleteContatoControler, getContatoController, updateContatoControler } from "../controller/clienteAndContato.controller";
import { authMiddleware } from "../middlewares/decodeToken.middlewares";
import { verifyEmailMiddlewares } from "../middlewares/email.middlewares";
import { verifyTokenMiddlewares } from "../middlewares/token.middlewares";
export const routerContatos = Router();

routerContatos.post('/:id',verifyTokenMiddlewares,authMiddleware,verifyEmailMiddlewares,CreateContatoControler  )
routerContatos.patch('/:id',verifyTokenMiddlewares,authMiddleware,updateContatoControler )
routerContatos.delete('/:id',verifyTokenMiddlewares,deleteContatoControler )
routerContatos.get('/:id',verifyTokenMiddlewares ,contatoGetIdController)
routerContatos.get('',verifyTokenMiddlewares,getContatoController )