import AppDataSource from "../../data-source";
import { Cliente } from "../entities/cliente";
import { Contato } from "../entities/contato";


export const clienteRepo= AppDataSource.getRepository(Cliente)
export const contatoRepo= AppDataSource.getRepository(Contato)