import { CopyPath } from "./entity/copyPath.entity";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { BuildJsonLocation } from "./entity/buildJsonLocation.entity";
import { getSqliteDatabasePath } from "./get-env-config";
import { migrations } from "./migration";

const dbPath: string = getSqliteDatabasePath();

const dataSourceOptions: DataSourceOptions = {
  type: "sqlite",
  database: dbPath,
  synchronize: false,
  logging: false,
  entities: [CopyPath, BuildJsonLocation],
  migrations: migrations,
};

export const AppDataSource = new DataSource(dataSourceOptions);
