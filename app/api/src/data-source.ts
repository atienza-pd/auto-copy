import { CopyPath } from './entity/copyPath';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { BuildJsonLocation } from './entity/buildJsonLocation';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "copyPath.db",
    synchronize: true,
    logging: false,
    entities: [CopyPath, BuildJsonLocation],
    migrations: [],
    subscribers: [],
})
