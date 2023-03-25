export interface IUserRequest {
    nome_completo: string;
    email: string;
    telefone: string;
    password: string;
}

export interface IUser {
    id: string;
    nome_completo: string;
    telefone: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserUpdate {
    nome_completo?: string;
    email?: string;
    password?: string;
}

export interface IContactRequest {
    nome_completo: string;
    email: string;
    telefone: string;
}
export interface IContactUpdate {
    nome_completo: string;
    email: string;
    telefone: string;
}
