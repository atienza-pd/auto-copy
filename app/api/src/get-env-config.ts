import dotenv  from 'dotenv';

dotenv.config();

export const getSqliteDatabasePath = () =>{
    return process.env.SQLITE_DATABASE_PATH;
}