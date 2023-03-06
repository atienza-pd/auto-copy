 $developmentEnv = Get-Env -keyParam 'DEVELOPMENT'
    $isDevelopment = [bool]$developmentEnv;
    Write-Host $isDevelopment