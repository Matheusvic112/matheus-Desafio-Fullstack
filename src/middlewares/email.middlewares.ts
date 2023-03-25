import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appHandles";
import { clienteRepo } from "../repositores/userRepo";

export const verifyEmailMiddlewares = async (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    const { email } = req.body;

    const userEmail = await clienteRepo.findOneBy({ email: email });

    if (userEmail) {
        throw new AppError("Email already exist", 409);
    }

    return next();
};
