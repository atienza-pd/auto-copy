import { CopyPath } from "./entity/copyPath.entity";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { BuildJsonLocation } from "./entity/buildJsonLocation.entity";
import { init1703023511953 } from "./migration/1703023511953-init";
import { getSqliteDatabasePath } from "./get-env-config";
import { addShowProgressInLogsProperty1703737124011 } from "./migration/1703737124011-addShowProgressInLogsProperty";

const dbPath: string = getSqliteDatabasePath();

const dataSourceOptions: DataSourceOptions = {
  type: "sqlite",
  database: dbPath,
  synchronize: false,
  logging: false,
  entities: [CopyPath, BuildJsonLocation],
  migrations: [init1703023511953, addShowProgressInLogsProperty1703737124011],
};

export const AppDataSource = new DataSource(dataSourceOptions);
