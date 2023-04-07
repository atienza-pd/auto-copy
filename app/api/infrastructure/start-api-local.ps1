$installPath = "$env:APPDATA/auto-copy/apps/api"
Set-Location $installPath
Start-Process node dist/src/index.js