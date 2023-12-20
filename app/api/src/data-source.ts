import { CopyPath } from "./entity/copyPath.entity";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { BuildJsonLocation } from "./entity/buildJsonLocation.entity";
import { init1703023511953 } from "./migration/1703023511953-init";
import { getSqliteDatabasePath } from "./get-env-config";

const dbPath = getSqliteDatabasePath();
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: dbPath,
  synchronize: false,
  logging: false,
  entities: [CopyPath, BuildJsonLocation],
  migrations: [init1703023511953],
});
