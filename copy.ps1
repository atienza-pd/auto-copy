$pathsJson = Get-Runnable-Paths-Json

$logPath = Get-LogFile-Path

ForEach ($path in $pathsJson) {
   $sourcePath = Get-Single-Slash-Path -path $path.source;
   $destinationPath = Get-Single-Slash-Path -path $path.destination;
   $name = $path.name;
   Write-Host "Name $name"
   Write-Host "Source: $sourcePath"
   Write-Host "Destination: $destinationPath"
   Write-Host "Executing copy..."
   robocopy $sourcePath $destinationPath $path.includeFilesOnly /log+:$logPath /np /xo /z /s /purge /xd /copy:dt /r:0 $path.excludeDirectories /xf $path.excludeFiles
   
   if ($LASTEXITCODE -ge 8) {
      Write-Host "Copy not executed. Path not found"
   }
   else {
      Write-Host "Copy executed"
   }
   
   Write-Host ""
}
##TODO: Add Mirroring functionality