$installPath = "$env:APPDATA/auto-copy"
$currentDate = Get-Date -UFormat "%m%d%Y";
$currentPath = ".\";
$files = "output.ps1","ftp-output.ps1";
$isExistsLogsFolder = Test-Path -Path ".\install-logs";
if (!$isExistsLogsFolder) {
    mkdir .\install-logs;
}
##Copy the copy.ps1 and paths.json
robocopy $currentPath $installPath $files /log+:.\install-logs\install-log-$currentDate.txt /np /xo