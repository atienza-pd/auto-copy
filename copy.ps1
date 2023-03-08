
$pathsJson = Get-Runnable-Paths-Json

$logPath = Get-LogFile-Path

ForEach ($path in $pathsJson) {
   $sourcePath = Get-Single-Slash-Path -path $path.source;
   $destinationPath =  Get-Single-Slash-Path -path $path.destination;
   $name = $path.name;
   Write-Host "Name $name"
   Write-Host "Source: $sourcePath"
   Write-Host "Destination: $destinationPath"
   robocopy $sourcePath $destinationPath $path.includeFilesOnly /log+:$logPath /np /xo /mt /z /s /purge /xd $path.excludeDirectories /xf $path.excludeFiles
}
##TODO: Add Mirroring functionality