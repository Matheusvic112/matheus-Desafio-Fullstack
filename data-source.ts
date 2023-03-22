
import { DataSource } from "typeorm"
import "dotenv/config"
import { Cliente } from "./src/entities/cliente"
import { Contato } from "./src/entities/contato"
import {initial1679494940173} from "./src/migrations/1679494940173-initial"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [Cliente,Contato],
        migrations: [initial1679494940173]
    }
)

export default AppDataSource