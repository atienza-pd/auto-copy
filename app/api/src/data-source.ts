import { CopyPath } from "./entity/copyPath.entity";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { BuildJsonLocation } from "./entity/buildJsonLocation.entity";
import { init1703023511953 } from "./migration/1703023511953-init";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "C:/data/copyPath.db",
  synchronize: false,
  logging: false,
  entities: [CopyPath, BuildJsonLocation],
  migrations: [init1703023511953],
});
