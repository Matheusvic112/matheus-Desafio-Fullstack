import AppDataSource from "../../data-source";
import { Cliente } from "../entities/cliente";


export const clienteRepo= AppDataSource.getRepository(Cliente)