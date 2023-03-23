import "express-async-errors"
import { Request  } from "express";
import { AppError } from "../errors/appHandles";
import { IContactRequest, IContactUpdate } from "../interface";
import {  contatoRepo } from "../repositores/userRepo";

export const createContatoService= async(req:Request) =>{
    const emailExist = await contatoRepo.findOneBy({email:req.body.email})
    if(emailExist){
        throw new AppError("Email exist " , 409)

    }

    const createCliente = contatoRepo.create({...req.body , cliente:req.clientFind  })
    await contatoRepo.save(createCliente)

    return createCliente
}
export const updateContatoService = async(payload: IContactUpdate, id: string ) => {

    const contato = await contatoRepo.findOneBy({id:id})

    if (!contato) {
        throw new AppError("contact not found", 404)
    }

    const emailExist = await contatoRepo.findOneBy({email: payload.email, id: id})

    if (emailExist) {
        throw new AppError("Email already existing in another contact", 409)
    }

    
    await contatoRepo.update(id,{...contato, ...payload})

    return payload
}


export const getContatoService = async()=>{
    const contato = await contatoRepo.find({
        select:{id:true,
            nome_completo:true,
            email:true,
            telefone:true
            
        },
        relations:{
            cliente:true
        }

    })
    return contato
}



export const contatoGetIdService = async(id:string) =>{

    const getContato = await contatoRepo.findOneBy({id:id})
    
    if (!getContato) {
        throw new AppError("Contact not found", 404)
    }

    return getContato
}

export const deleteContatoByIdService = async (id: string) => {
    const contato = await contatoRepo.findOneBy({id:id })

    if (!contato) {
        throw new AppError("contact not found", 404)
    }

    await contatoRepo.delete(contato)
    
    return [204]
}  