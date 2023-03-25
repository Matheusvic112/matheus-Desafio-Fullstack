import { Cliente } from "../entities/cliente";
import { Contato } from "../entities/contato";
import { AppDataSource } from "./../data-source";

export const clienteRepo = AppDataSource.getRepository(Cliente);
export const contatoRepo = AppDataSource.getRepository(Contato);
