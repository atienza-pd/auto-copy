function Add-Space {
   Write-Host "";
}

$pathsJson = Get-RunnablePathsJsonNetwork
$ftpSyncFilePath = Get-Env -keyParam 'FTP_SYNC_FILE_PATH'
ForEach ($path in $pathsJson) {
   $sourcePath = Get-Single-Slash-Path -path $path.source;
   $destinationPath = Get-Single-Slash-Path -path $path.destination;
   Write-Host "Name:"$path.name;
   Write-Host "Source: $sourcePath";
   Write-Host "Destination: $destinationPath";
   $includedFiles = [string]$path.includeFilesOnly
   $excludedFiles = [string]$path.excludeFiles
   $excludedDirectories = [string]$path.excludeDirectories

   python $ftpSyncFilePath\\main.py --source=$sourcePath --destination=$destinationPath --excludedFiles=$excludedFiles --includedFiles=$includedFiles --excludedDirectories=$excludedDirectories

   if ($LASTEXITCODE -ge 8) {
      Write-Host "Copy not executed. Path not found"
   }
   else {
      Write-Host "Copy executed"
   }
   Add-Space;
}
##TODO: Add Mirroring functionality