import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Contato } from "./contato";

@Entity("clientes")
export class Cliente {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome_completo: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    telefone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Contato, (contato) => contato.cliente)
    contatos: Contato[];
}
