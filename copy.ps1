
$pathsJson = Get-Runnable-Paths-Json

$logPath = Get-LogFile-Path

ForEach ($path in $pathsJson) {
   $sourcePath = Get-Single-Slash-Path -path $path.source;
   $destinationPath = Get-Single-Slash-Path -path $path.destination;
   $name = $path.name;
   Write-Host "Name $name"
   Write-Host "Source: $sourcePath"
   Write-Host "Destination: $destinationPath"
   $sourceFound = Test-Path -Path $sourcePath;
   $destinationFound = Test-Path -Path $destinationPath;

   if ($sourceFound -and $destinationFound) {
      Write-Host "Executing copy..."
      robocopy $sourcePath $destinationPath $path.includeFilesOnly /log+:$logPath /np /xo /z /s /purge /xd /copy:dt $path.excludeDirectories /xf $path.excludeFiles
      Write-Host "Copy executed"
   }

   if (!$sourceFound -or !$destinationFound) {
      Write-Host "Copy not executed. Path not found"
   }
}
##TODO: Add Mirroring functionality