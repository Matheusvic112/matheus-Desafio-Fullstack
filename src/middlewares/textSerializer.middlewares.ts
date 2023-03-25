import * as yup from "yup"
import { NextFunction, Request , Response } from "express";
import { AnySchema } from 'yup'
import { AppError } from "../errors/appHandles";


export const verifyTextMiddleware =(serializer:AnySchema)=> async (req:Request,res:Response, next:NextFunction) =>{
    try {
        await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
    })
        return next()
        

    }catch (error ){
        if (error instanceof yup.ValidationError) {
            throw new AppError({message:error.errors},400)
        } 

    }

}