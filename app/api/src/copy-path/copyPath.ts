import { File } from "./file";

export interface CopyPath{
    name: string,
    source : string,
    destination: string,
    includeFilesOnly: File[],
    excludeDirectories: [],
    excludeFiles: File[]
}