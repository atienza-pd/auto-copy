export interface CopyPathDto {
  id: any;
  destination: any;
  source: any;
  name: any;
  includeFilesOnly: string[];
  excludeDirectories: string[];
  excludeFiles: any[];
  activeDaysOfWeek: string[];
  disable: boolean;
  showProgressInLogs: boolean;
}
