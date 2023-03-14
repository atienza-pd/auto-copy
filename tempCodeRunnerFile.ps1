$functionContents = Get-Content -Path "./functions.ps1"
$copyContents = Get-Content -Path "./copy.ps1"
$combinedContent = $functionContents + "`n" + $copyContents
$combinedContent | Out-File -FilePath "./output.ps1"