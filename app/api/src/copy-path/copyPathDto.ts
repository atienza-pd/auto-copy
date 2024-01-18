export interface CopyPathDto {
    id?: number;
    name: string;
    source: string;
    destination: string;
    includeFilesOnly: string[];
    excludeDirectories: string[];
    excludeFiles: string[];
    activeDaysOfWeek: string[];
    showProgressInLogs: boolean;
}
