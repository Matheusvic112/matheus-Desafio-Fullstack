import { Request , Response } from "express";
import { hash, compare } from 'bcrypt';
import jwt from "jsonwebtoken";
import '../@types/express'

import {clienteRepo} from "../repositores/userRepo"
import { AppError } from "../errors/appHandles";
import "express-async-errors"
import { IUserLogin, IUserUpdate } from "../interface";

export const createCLiente = async(payload:any) =>{
    const hashPassword = await hash(payload.password.toString(), 10);
    const createCliente = clienteRepo.create({...payload, password:hashPassword})
    await clienteRepo.save(createCliente);

    const{...newCLiente} = createCliente
    return newCLiente
}


export const getClienteService = async()=>{
    const clientes = await clienteRepo.find({
        select:{id:true,
            nome_completo:true,
            email:true,
            createdAt:true,
            telefone:true
            
        },
        relations:{
            contatos:true
        }
            
        
    })
    return clientes
}

export const clienteGetIdService = async(id:string) =>{

    const getCliente = await clienteRepo.findOneBy({id:id})
    
    if (!getCliente) {
        throw new AppError("User not found", 404)
    }
    return getCliente
}

export const updateClienteService = async(payload:IUserUpdate, id:string)=>{
    const users = await clienteRepo.findOneBy({id:id})
    
    if(!users?.id){
        throw new AppError("User not found" , 404)
    }
    await clienteRepo.update( users.id ,{...payload,password:undefined })

    return  payload

}

export const deleteClienteService =  async(req:Request) =>{
    const user = await clienteRepo.findOneBy({id:req.params.id})
    if (!user) {
        throw new AppError("Invalid Identification", 404);
    }

    await clienteRepo.delete(user.id);
        return[204]
    }

export const loginClienteService = async(login:IUserLogin) =>{
    const{password,email} = login
    const loginCliente = await clienteRepo.findOne({where:{email},select:["email", "password", "id"]})
    console.log(loginCliente)
    if(!loginCliente){
        
        throw new AppError("wrong email",404)
    }
    
    
        const decodPass = await compare(password,loginCliente.password)
        
        if(!decodPass){
            throw new AppError("Wrong password",404)
        }
        
    
    
        const token = jwt.sign({id:loginCliente.id }, process.env.SECRET_KEY as string,{expiresIn:"24h",subject:loginCliente.id})
        
        return {token}
}    