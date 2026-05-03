$ErrorActionPreference = "Stop"
$projectPath = "C:\Proyectos\novuagency-v2\novu-agency"

Write-Host "Starting Next.js dev server..."
$serverJob = Start-Job -ScriptBlock {
    param($path)
    Set-Location $path
    npm run dev
} -ArgumentList $projectPath

Write-Host "Waiting for server to start..."
Start-Sleep -Seconds 15

Write-Host "Running TestSprite..."
$result = & node "C:\Users\win10\AppData\Local\npm-cache\_npx\8ddf6bea01b2519d\node_modules\@testsprite\testsprite-mcp\dist\index.js" generateCodeAndExecute 2>&1

Write-Host $result

Stop-Job $serverJob -ErrorAction SilentlyContinue
Remove-Job $serverJob -ErrorAction SilentlyContinue