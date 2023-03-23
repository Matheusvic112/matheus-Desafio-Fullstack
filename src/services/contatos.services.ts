import { AppError } from "../errors/appHandles";
import "express-async-errors"
import { IContactRequest, IContactUpdate } from "../interface";
import { clienteRepo, contatoRepo } from "../repositores/userRepo";

export const createContatoService= async(payload:IContactRequest, id:string) =>{
    const emailExist = await contatoRepo.findOneBy({email:payload.email})
    if(emailExist){
        throw new AppError("Email exist " , 409)

    }
    const userFind = await clienteRepo.findOne({where:{id:id}})

    if(!userFind){
        throw new AppError("user not found " , 404)

    }
    const createCliente = contatoRepo.create({...payload , cliente:userFind })
    await contatoRepo.save(createCliente)

    return createCliente
}
export const updateContatoService = async(payload: IContactUpdate, id: string ) => {

    const contato = await contatoRepo.findOneBy({id:id})

    if (!contato) {
        throw new AppError('contact not found', 404)
    }

    const emailExist = await contatoRepo.findOneBy({email: payload.email, id: id})

    if (emailExist) {
        throw new AppError('Email already existing in another contact', 409)
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