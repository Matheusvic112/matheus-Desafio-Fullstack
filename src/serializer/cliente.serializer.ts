import * as yup from 'yup';
import { Schema } from 'yup';

import { IUserRequest } from '../interface';

export const ClienteSerializer: Schema<IUserRequest> = yup.object().shape({
    email: yup.string().email().min(3).required(),
    nome_completo: yup.string().required(),
    password: yup.string().min(5).required(),
    telefone: yup.string().min(11).required(),
});

export const contatoSerializer: Schema<IUserRequest> = yup.object().shape({
    email: yup.string().email().min(3).required(),
    nome_completo: yup.string().required(),
    password: yup.string().min(5).required(),
    telefone: yup.string().min(11).required(),
});