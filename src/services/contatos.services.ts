import "express-async-errors";
import { Request } from "express";
import { AppError } from "../errors/appHandles";
import { IContactUpdate, IUser } from "../interface";
import { contatoRepo } from "../repositores/userRepo";
import { Contato } from "../entities/contato";

const findContactById = async (id: string): Promise<Contato | null> => {
    const foundContact = await contatoRepo.findOne({
        where: {
            id,
        },
        relations: {
            cliente: true,
        },
    });
    if (!foundContact) {
        throw new AppError("Contact Not Found", 404);
    }
    return foundContact;
};

export const createContatoService = async (req: Request) => {
    const emailExist = await contatoRepo.findOneBy({ email: req.body.email });
    const userLogged = req.clientFound;
    if (emailExist) {
        throw new AppError("Email exist ", 409);
    }
    const body: IUser = req.body;
    const createCliente = contatoRepo.create({...body,
        cliente: userLogged,
    });
    await contatoRepo.save(createCliente);

    return await findContactById(createCliente.id);
};

export const updateContatoService = async (payload: IContactUpdate,id: string) => {

    const contato = await contatoRepo.findOneBy({ id: id });

    if (!contato) {
        throw new AppError("contact not found", 404);
    }


    await contatoRepo.update(id, { ...contato, ...payload });

    return await findContactById(id);
};

export const getContatoService = async () => {
    const contato = await contatoRepo.find({
        select: { id: true, nome_completo: true, email: true, telefone: true },
        relations: {
            cliente: true,
        },
    });
    return contato;
};

export const contatoGetIdService = async (id: string) => {
    const getContato = await contatoRepo.findOneBy({ id: id });

    if (!getContato) {
        throw new AppError("Contact not found", 404);
    }

    return getContato;
};

export const deleteContatoByIdService = async (id: string) => {
    const contato = await contatoRepo.findOneBy({id:id })

    if (!contato) {
        throw new AppError("contact not found", 404)
    }

    await contatoRepo.delete(id)
    return [204]
}    