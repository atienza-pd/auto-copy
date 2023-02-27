import { CopyPath } from './entity/copyPath';
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "copyPath.db",
    synchronize: true,
    logging: false,
    entities: [CopyPath],
    migrations: [],
    subscribers: [],
})
