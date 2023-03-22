import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from '../entities/cliente';

@Entity()
export class Contato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_completo: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    data_registro: Date;

    @ManyToOne(() => Cliente, cliente => cliente.contatos)
    cliente: Cliente;
}