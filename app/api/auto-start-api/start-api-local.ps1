$installPath = "$env:APPDATA/auto-copy/apps/api"
Set-Location $installPath
npm install
node ./src/index.js