import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Contato } from './contato';



@Entity()
export class Cliente {
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

    @OneToMany(() => Contato, contato => contato.cliente)
    contatos: Contato[];
}