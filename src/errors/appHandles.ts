import { NextFunction, Request , Response } from "express";

export const errorHandler = (err:Error, req :Request, res:Response, next :NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({message : err.message});
    }
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error." });
};
export class AppError extends Error{

statusCode:number
constructor(message :any  , statusCode = 404){
    super();
    this.message =  message ;
    this.statusCode = statusCode;
}

}