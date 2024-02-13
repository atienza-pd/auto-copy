function Add-Space {
   Write-Host "";
}

$pathsJson = Get-Runnable-Paths-Json;
$logPath = Get-LogFile-Path

ForEach ($path in $pathsJson) {
      $sourcePath = Get-Single-Slash-Path -path $path.source;
      $destinationPath = Get-Single-Slash-Path -path $path.destination;
      $showProgressOnLogs = [bool]::Parse($path?.showProgressOnLogs ?? "false");
      $showHistoryInLogFile = [bool]::Parse($path?.showHistoryInLogFile ?? "false");
      $np = $showProgressOnLogs ? "/np": " ";
      $log = $showHistoryInLogFile ? "/log+:$logPath" : " ";
      Write-Host "Name:"$path.name;
      Write-Host "Source: $sourcePath";
      Write-Host "Destination: $destinationPath";
      Write-Host "Show Progress logs: $showProgressOnLogs";
      Write-Host "Executing copy...";
      robocopy $sourcePath $destinationPath $path.includeFilesOnly $log $np /xo /z /s /purge /xd /copy:dt /r:0 $path.excludeDirectories /xf $path.excludeFiles
   
      if ($LASTEXITCODE -ge 8) {
         Write-Host "Copy not executed. Path not found"
      }
      else {
         Write-Host "Copy executed"
      }
      
      Add-Space;
   
}
##TODO: Add Mirroring functionality