$isExistingPathJson = Test-Path -Path ".\paths.json";
if ($isExistingPathJson) {
   $paths =  Get-Content ".\paths.json" | ConvertFrom-Json;
}else{
   $paths = Get-Content "$env:APPDATA\auto-copy\paths.json" | ConvertFrom-Json;
}

$currentDate = Get-Date -UFormat "%m%d%Y";
$logFileName = "log-$currentDate.txt";

$isExistsLogFile = Test-Path -Path ".\$logFileName";
if ($isExistsLogFile) {
   $logPath =  ".\$logFileName";
}else{
   $logPath = "$env:APPDATA\auto-copy\$logFileName";
}

ForEach ($path in $paths) {
   $sourcePath = $path.source;
   $destinationPath = $path.destination;
   robocopy $sourcePath $destinationPath $path.includeFilesOnly /log+:$logPath /np /xo /mt /z /s /purge /xd $path.excludeDirectories /xf $path.excludeFiles
}