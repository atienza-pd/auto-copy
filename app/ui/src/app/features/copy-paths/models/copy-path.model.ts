export interface CopyPathDto {
  id: any;
  destination: any;
  source: any;
  name: any;
  includeFilesOnly: any[];
  excludeDirectories: any[];
  excludeFiles: any[];
  activeDaysOfWeek: string[];
  disable: boolean;
  showProgressInLogs: boolean;
}
