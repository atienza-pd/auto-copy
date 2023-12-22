import dotenv  from 'dotenv';

dotenv.config();

export const getSqliteDatabasePath = (): string =>{
    return process.env.SQLITE_DATABASE_PATH ?? "";
}