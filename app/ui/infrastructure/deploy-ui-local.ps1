$installPath = "C:\\nginx-1.22.1\\html"
$sourcePath = "app/ui/dist/ui";
$destinationPath = $installPath;
$includedFiles = "*";
$excludedDirectories = "";
$excludedFiles = "";

robocopy $sourcePath $destinationPath $includedFiles /np /xo /z /s /purge /xd /copy:dt $excludedDirectories /xf $excludedFiles

