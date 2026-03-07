param(
  [Parameter(Position = 0)]
  [ValidateSet("start", "clean", "stop")]
  [string]$Action = "start"
)

$ErrorActionPreference = "Stop"
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$nextDir = Join-Path $projectRoot ".next"

function Stop-DevPorts {
  $ports = @(3000, 3001, 3002, 3003, 3004, 3005, 3006)

  foreach ($port in $ports) {
    $matches = netstat -ano | Select-String (":$port\s+.*LISTENING")
    foreach ($line in $matches) {
      $tokens = ($line.ToString().Trim() -split "\s+")
      if ($tokens.Length -gt 0) {
        $pidText = $tokens[-1]
        if ($pidText -match "^\d+$") {
          Stop-Process -Id ([int]$pidText) -Force -ErrorAction SilentlyContinue
        }
      }
    }
  }
}

function Clear-NextCache {
  if (Test-Path $nextDir) {
    Remove-Item $nextDir -Recurse -Force -ErrorAction SilentlyContinue
  }
}

if ($Action -eq "stop") {
  Stop-DevPorts
  Write-Host "Stopped dev ports."
  exit 0
}

if ($Action -eq "clean") {
  Stop-DevPorts
  Clear-NextCache
  Write-Host "Stopped dev ports and cleared .next cache."
  exit 0
}

Stop-DevPorts
Clear-NextCache

$nextCmd = Join-Path $projectRoot "node_modules\\.bin\\next.cmd"
if (!(Test-Path $nextCmd)) {
  throw "Could not find $nextCmd. Run npm install first."
}

Set-Location $projectRoot
& $nextCmd dev
