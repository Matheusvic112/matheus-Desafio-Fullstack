import express from "express";
import { errorHandler } from "./errors/appHandles";
import { routerCliente } from "./routers/client.routes";
import { routerContatos } from "./routers/contact.routes";
import { loginCliente } from "./routers/login.routes";
import cors from "cors";
import "express-async-errors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/client", routerCliente);
app.use("/login", loginCliente);
app.use("/contact", routerContatos);

app.use(errorHandler);

export default app;
