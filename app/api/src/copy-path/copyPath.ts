import { File } from "./file";

export interface CopyPath{
    id: number;
    name: string,
    source : string,
    destination: string,
    includeFilesOnly: string[],
    excludeDirectories: string[],
    excludeFiles: string[]
}