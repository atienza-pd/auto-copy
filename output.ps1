function Get-Env {
    param (
        [Parameter(Mandatory = $true)]
        [string]$keyParam
    )

    $env = ".env"
    $envFound = Test-Path -Path $env

    if (!$envFound) {
        $env = "$env:APPDATA\auto-copy\.env"
    }

    # Read the contents of the .env file into a variable
    $envContent = Get-Content $env
 
    # Loop through each line in the file
    foreach ($line in $envContent) {
        # Split the line into a key/value pair
        $keyValue = $line.Split('=')
 
        # Extract the key and value
        $key = $keyValue[0]
        $value = $keyValue[1]
 
        # Do something with the key and value, for example:
        if ($key -eq $keyParam) {
            return $value;
        }
        return '';
    }
}

function Get-Paths-Json {
    $development = Get-Env -keyParam 'DEVELOPMENT'

    if ($development -eq "true") {
        $paths = Get-Content ".\paths.json" | ConvertFrom-Json;
        return $paths;
    }
    $paths = Get-Content "$env:APPDATA\auto-copy\paths.json" | ConvertFrom-Json;
    return $paths;
}

function Get-Runnable-Paths-Json {
    $jsons = Get-Paths-Json
    $dayOfWeek = (Get-Date).DayOfWeek

    ForEach ($path in $jsons) {
        $disable = [boolean]::Parse($path.disable ?? "true");
        if ($disable) {
            return;
        }

        $foundDayOfWeek = $path.activeDaysOfWeek | Where-Object { $_ -eq "$dayOfWeek" }
        if ($foundDayOfWeek.Count -eq 0) {
            $jsons = $jsons | Where-Object { $_.id -ne $path.id }
        }
    }
    Write-Host $jsons;
    return $jsons
}

function Get-LogFile-Path {
    $currentDate = Get-Date -UFormat "%m%d%Y";
    $logFileName = "log-$currentDate.txt";
    $development = Get-Env -keyParam 'DEVELOPMENT'
    
    if ($development -eq "true") {
        $logPath = ".\$logFileName";
        return $logPath;
    }
    $logPath = "$env:APPDATA\auto-copy\$logFileName";
    return $logPath;
}

function Format-Path-Double-Forward-Slash-To-Single {
    param (
        [Parameter(Mandatory = $true)]
        [string]$path
    )
    ## $path = $path.Replace("\\", "\")
    return $path;
}

function Get-Single-Slash-Path {
    param (
        [Parameter(Mandatory = $true)]
        [string]$path
    )

    return Format-Path-Double-Forward-Slash-To-Single -path $path
}


function Add-Space {
   Write-Host "";
}

$pathsJson = Get-Runnable-Paths-Json
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
