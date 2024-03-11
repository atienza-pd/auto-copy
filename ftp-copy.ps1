function Add-Space {
   Write-Host "";
}

$pathsJson = Get-Runnable-Paths-Json;

ForEach ($path in $pathsJson) {
      $sourcePath = Get-Single-Slash-Path -path $path.source;
      $destinationPath = Get-Single-Slash-Path -path $path.destination;
      Write-Host "Name:"$path.name;
      Write-Host "Source: $sourcePath";
      Write-Host "Destination: $destinationPath";
      Write-Host "Show Progress logs: $showProgressOnLogs";
      Write-Host "Executing copy...";
      python C:\\dev\\personal\\python\\FTP-Sync\\main.py --source=$sourcePath --destination=$destinationPath --serviceMode=False --includedFiles=$path.includeFilesOnly --excludedDirectories=$path.excludeDirectories --excludedFiles=$path.excludeFiles
   
      if ($LASTEXITCODE -ge 8) {
         Write-Host "Copy not executed. Path not found"
      }
      else {
         Write-Host "Copy executed"
      }
      
      Add-Space;
   
}
##TODO: Add Mirroring functionality