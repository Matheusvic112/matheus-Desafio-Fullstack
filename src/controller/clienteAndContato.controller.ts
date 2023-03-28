import {clienteGetIdService,createCLiente,deleteClientService,getClienteService,loginClientService,updateClienteService,
} from "../services/cliente.services";
import { Request, Response } from "express";
import {
    contatoGetIdService,
    createContatoService,
    deleteContatoByIdService,
    updateContatoService,
} from "../services/contatos.services";

export const createUserController = async (req: Request, res: Response) => {
    const user = await createCLiente(req.body);
    return res.status(201).json(user);
};

export const getClienteController = async (req: Request, res: Response) => {
    const user = await getClienteService();
    return res.status(200).json(user);
};

export const updateClienteControler = async (req: Request, res: Response) => {
    const user = await updateClienteService(req.body, req.params.id);
    return res.status(200).json(user);
};

export const deleteClientControler = async (req: Request, res: Response) => {
    const [statusCode, data] = await deleteClientService(req);
    return res.status(statusCode).json(data);
};

export const loginController = async (req: Request, res: Response) => {
    const user = await loginClientService(req.body);
    return res.status(200).json(user);
};
export const clientGetController = async (req: Request, res: Response) => {
    const getCliente = await clienteGetIdService(req.params.id);
    return res.status(200).json(getCliente);
};

export const CreateContactControler = async (req: Request, res: Response) => {
    const user = await createContatoService(req);
    return res.status(201).json(user);
};

export const updateContactControler = async (req: Request, res: Response) => {
    const user = await updateContatoService(req.body, req.params.id);
    return res.status(200).json(user);
};


export const deleteContactControler = async (req: Request, res: Response) => {
    const [statusCode, data] = await deleteContatoByIdService(req.params.id);
    return res.status(statusCode).json(data);
};

export const contatoGetIdController = async (req: Request, res: Response) => {
    
    const getContato = await contatoGetIdService(req.params.id);
    return res.status(200).json(getContato);
};
