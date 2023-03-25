import { Cliente } from "./../../entities/cliente";

declare global {
    namespace Express {
        interface Request {
            clientFound: Cliente;
        }
    }
}

export {};
