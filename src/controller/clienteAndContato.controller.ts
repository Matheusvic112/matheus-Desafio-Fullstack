import { clienteGetIdService, createCLiente, deleteClienteService, getClienteService, loginClienteService, updateClienteService } from "../services/cliente.services";
import '../@types/express'

import { Request , Response } from "express";
import { contatoGetIdService, createContatoService, deleteContatoByIdService, getContatoService, updateContatoService } from "../services/contatos.services";

export const createUserController = async(req :Request ,res:Response) => {

    const user = await createCLiente (req.body)
    return res.status(201).json(user);
}



export const getClienteController = async(req :Request ,res:Response) =>{
    const user = await getClienteService()
    return res.status(200).json(user)
}

export const updateClienteControler = async(req:Request, res:Response) =>{
    const user = await updateClienteService(req.body , req.params.id)
    return res.status(200).json(user)
}

export const deleteClienteControler = async(req:Request, res:Response) =>{
    const [statusCode, data] = await deleteClienteService(req)
    return res.status(statusCode).json(data)
}


export const loginController = async (req:Request , res:Response) =>{

    const user = await loginClienteService(req.body)
    return res.status(200).json(user)

}
export const clienteGetController = async(req:Request , res:Response) =>{
    
    const getCliente=  await clienteGetIdService(req.params.id)
    return res.status(200).json(getCliente)
    
}


export const CreateContatoControler = async(req:Request, res:Response) =>{
    const user = await createContatoService(req)
    return res.status(200).json(user)
}

export const updateContatoControler = async(req:Request, res:Response) =>{
    const user = await updateContatoService(req.body , req.params.id)
    return res.status(200).json(user)
}



export const getContatoController = async(req :Request ,res:Response) =>{
    const user = await getContatoService()
    return res.status(200).json(user)
}

export const deleteContatoControler = async(req:Request, res:Response) =>{
    const [statusCode, data] = await deleteContatoByIdService(req.params.id)
    return res.status(statusCode).json(data)
}


export const contatoGetIdController = async(req:Request , res:Response) =>{
    
    const getContato=  await contatoGetIdService(req.params.id)
    return res.status(200).json(getContato)
    
}