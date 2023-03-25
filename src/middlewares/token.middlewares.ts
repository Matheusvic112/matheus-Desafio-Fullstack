import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appHandles";

export const verifyTokenMiddlewares = async (req: Request,res: Response,next: NextFunction) => {
    let authToken = req.headers.authorization;

    if (!authToken) {
        throw new AppError("Token does not exist ", 404);
    }

    return next();
};
