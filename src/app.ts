import "express-async-errors"
import express,{ Application } from "express";
import { errorHandler } from "./errors/appHandles";
import { routerCliente } from "./routers/clientes.routes";
import { routerContatos } from "./routers/contato.routes";
import { loginCliente } from "./routers/login.routes";

const app: Application = express()
app.use(express.json())
app.use("/cliente", routerCliente)
app.use("/login", loginCliente)
app.use("/contato", routerContatos)
app.use(errorHandler)
export default app