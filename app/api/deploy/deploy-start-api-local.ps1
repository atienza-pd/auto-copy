$installPath = "$env:APPDATA/auto-copy/apps"
$sourcePath = "app/api/auto-start-api";
$destinationPath = $installPath;
$includedFiles = "*";

robocopy $sourcePath $destinationPath $includedFiles /np  
