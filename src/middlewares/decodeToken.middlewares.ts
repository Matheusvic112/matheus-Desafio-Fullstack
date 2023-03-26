import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appHandles";
import { clienteRepo, contatoRepo } from "./../repositores/userRepo";
import { Contato } from "../entities/contato";

export const authClienteMiddleware = async (req: Request,res: Response,next: NextFunction) => {
            const { headers } = req;
            
            if (!headers) {
                throw new AppError("Token required", 401);
            }
            
            let token = req.headers.authorization;
            
            if (!token) {
                throw new AppError("Invalid token", 401);
            }
            
            token = token.split(" ")[1];
    
    return jwt.verify(token,process.env.SECRET_KEY as string,async (error, decoded: any) => {
            if (error) {
                throw new AppError( "Invalid Token", 401);
            }
            const id = String(decoded.sub);
            const clientFound = await clienteRepo.findOneBy({ id });
            
            if (!clientFound) {
                throw new AppError("User Not Found", 404);
            }
            if(clientFound.id !== req.params.id){
                throw new AppError("Invalid id", 401);
                
            }
            req.clientFound = clientFound;
            
            return next();
        
        }
    );
};

export const authContatoMiddleware = async (req: Request,res: Response,next: NextFunction) => {
    const { headers } = req;
    
    if (!headers) {
        throw new AppError("Token required", 401);
    }
    
    let token = req.headers.authorization;
    
    if (!token) {
        throw new AppError("Invalid token", 401);
    }
    
    token = token.split(" ")[1];

return jwt.verify(token,process.env.SECRET_KEY as string,async (error, decoded: any) => {
    if (error) {
        throw new AppError( "Invalid Token", 401);
    }
    const id = String(decoded.sub);
    const clientFound = await clienteRepo.findOneBy({ id });

    
    if (!clientFound) {
        throw new AppError("User Not Found", 404);
    }


    req.clientFound = clientFound;
    
    return next();

}
);
};


export const authDeleteMiddleware = async (req: Request,res: Response,next: NextFunction) => {
    const { headers } = req;
    
    if (!headers) {
        throw new AppError("Token required", 401);
    }
    
    let token = req.headers.authorization;
    
    if (!token) {
        throw new AppError("Invalid token", 401);
    }
    
    token = token.split(" ")[1];

return jwt.verify(token,process.env.SECRET_KEY as string,async (error, decoded: any) => {
    if (error) {
        throw new AppError( "Invalid Token", 401);
    }
    const id = String(decoded.sub);
    const clientFound = await clienteRepo.findOneBy({ id });
    const contatoFound = await contatoRepo.findOneBy({ cliente:{id} }) as Contato;

    
    if (!clientFound) {
        throw new AppError("User Not Found", 404);
    }

    if(contatoFound.id !== req.params.id){
        throw new AppError("Invalid id", 401);
        
    }


    req.clientFound = clientFound;
    
    return next();

}
);
};

export const decodeGetContatos = async (req: Request,res: Response) =>{

    let token = req.headers.authorization as string;

    token  = token?.split(" ")[1];

    const clientToken = jwt.decode(token);

    if (!clientToken) {
        throw new AppError("Invalid Token");
    }
    const { sub: loginCliente } = clientToken;
    const clientFound = await clienteRepo.findOne({
        where: {
            id: String(loginCliente),
        },
        relations: {
            contatos: true,
        },
    });
    if (!clientToken) {
        throw new AppError("Invalid Token");
    }
    return res.json(clientFound);
    
}


