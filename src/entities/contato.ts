import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Cliente } from '../entities/cliente';

@Entity('contatos')
export class Contato {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome_completo: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(() => Cliente, (cliente) => cliente.contatos)
    cliente: Cliente;
}