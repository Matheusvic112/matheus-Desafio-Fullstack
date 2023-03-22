import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1679494940173 implements MigrationInterface {
    name = 'initial1679494940173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contatos" ("id" SERIAL NOT NULL, "nome_completo" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "data_registro" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" integer, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nome_completo" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "telefone" character varying NOT NULL, "data_registro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
    }

}
