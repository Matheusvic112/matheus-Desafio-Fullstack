import express from "express";
import { errorHandler } from "./errors/appHandles";
import { routerCliente } from "./routers/clientes.routes";
import { routerContatos } from "./routers/contato.routes";
import { loginCliente } from "./routers/login.routes";
import cors from "cors"
import "express-async-errors";
const app = express();

app.use(express.json());
app.use(cors())
app.use("/cliente", routerCliente);
app.use("/login", loginCliente);
app.use("/contato", routerContatos);

app.use(errorHandler);

export default app;
