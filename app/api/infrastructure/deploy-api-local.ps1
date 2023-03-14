$installPath = "$env:APPDATA/auto-copy/apps/api"
$sourcePath = "app/api";
$destinationPath = $installPath;
$includedFiles = "*";
$excludedDirectories = "node_modules", "dist";
$excludedFiles = ".env", ".gitignore", "copyPath.db", "package-lock.json", "*.md", "deploy-api-local.ps1", "tempCodeRunnerFile.ps1" ;

robocopy $sourcePath $destinationPath $includedFiles /np /xo /z /s /purge /xd /copy:dt $excludedDirectories /xf $excludedFiles

Set-Location $installPath
npm install
npm run build
