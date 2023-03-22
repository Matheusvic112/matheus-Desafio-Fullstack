import express,{ Application } from "express";
import { routerCliente } from "./routers/clientes.routes";

const app: Application = express()
app.use(express.json())
app.use("/cliente", routerCliente)

export default app