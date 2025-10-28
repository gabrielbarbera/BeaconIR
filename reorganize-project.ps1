# PowerShell Script to Reorganize BeaconIR Project
# This script reorganizes the project into beaconir/ and cms_beaconir/ folders

Write-Host "BeaconIR Project Reorganization" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "src") -or -not (Test-Path "cms")) {
    Write-Host "[X] Error: Must be in the BeaconIR root directory" -ForegroundColor Red
    Write-Host "Current location: $PWD" -ForegroundColor Yellow
    exit 1
}

Write-Host "[OK] Current directory verified: $PWD" -ForegroundColor Green
Write-Host ""

# Create backup first
Write-Host "Creating backup..." -ForegroundColor Cyan
$backupPath = "..\BeaconIR_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
Copy-Item -Path . -Destination $backupPath -Recurse -Exclude node_modules,.git
Write-Host "[OK] Backup created at: $backupPath" -ForegroundColor Green
Write-Host ""

# Step 1: Create new folders
Write-Host "Step 1: Creating new folder structure..." -ForegroundColor Cyan

if (Test-Path "beaconir") {
    Write-Host "[!] beaconir/ folder already exists. Removing..." -ForegroundColor Yellow
    Remove-Item -Path "beaconir" -Recurse -Force
}

if (Test-Path "cms_beaconir") {
    Write-Host "[!] cms_beaconir/ folder already exists. Removing..." -ForegroundColor Yellow
    Remove-Item -Path "cms_beaconir" -Recurse -Force
}

New-Item -ItemType Directory -Path "beaconir" -Force | Out-Null
New-Item -ItemType Directory -Path "cms_beaconir" -Force | Out-Null
Write-Host "[OK] Created beaconir/ and cms_beaconir/ folders" -ForegroundColor Green
Write-Host ""

# Step 2: Move CMS files
Write-Host "Step 2: Moving CMS files to cms_beaconir/..." -ForegroundColor Cyan

if (Test-Path "cms") {
    # Copy cms contents to cms_beaconir
    Copy-Item -Path "cms\*" -Destination "cms_beaconir\" -Recurse -Force
    Copy-Item -Path "cms\.*" -Destination "cms_beaconir\" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] CMS files moved" -ForegroundColor Green
} else {
    Write-Host "[!] CMS folder not found. Skipping CMS files..." -ForegroundColor Yellow
}
Write-Host ""

# Step 3: Move marketing site files
Write-Host "Step 3: Moving marketing site files to beaconir/..." -ForegroundColor Cyan

# Files and folders to move
$filesToMove = @(
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.js",
    "tailwind.config.js",
    "tsconfig.json",
    "postcss.config.js",
    "components.json",
    "railway.json",
    "vercel.json",
    "next-env.d.ts",
    "env.example",
    "QUICK_SWITCH_TO_NEON.md",
    "database-schema.sql",
    "generate-secrets.ps1",
    "generate-strapi-secrets.js",
    "BeaconIR.code-workspace",
    "setup-cms-repo.ps1",
    "reorganize-project.ps1"
)

foreach ($file in $filesToMove) {
    if (Test-Path $file) {
        if (Test-Path $file -PathType Container) {
            Copy-Item -Path $file -Destination "beaconir\$file" -Recurse -Force
        } else {
            Copy-Item -Path $file -Destination "beaconir\$file" -Force
        }
        Write-Host "  [OK] Moved: $file" -ForegroundColor Gray
    }
}

# Move .cursor if it exists
if (Test-Path ".cursor") {
    Copy-Item -Path ".cursor" -Destination "beaconir\.cursor" -Recurse -Force
    Write-Host "  [OK] Moved: .cursor" -ForegroundColor Gray
}

# Move .gitignore separately
if (Test-Path ".gitignore") {
    Copy-Item -Path ".gitignore" -Destination "beaconir\.gitignore" -Force
    Write-Host "  [OK] Moved: .gitignore" -ForegroundColor Gray
}

Write-Host "[OK] Marketing site files moved" -ForegroundColor Green
Write-Host ""

# Step 4: Keep docs/ in parent
Write-Host "Step 4: Keeping docs/ in parent folder..." -ForegroundColor Cyan
Write-Host "[OK] docs/ stays in parent folder" -ForegroundColor Green
Write-Host ""

# Step 5: Clean up old cms folder (move to backup)
Write-Host "Step 5: Cleaning up..." -ForegroundColor Cyan
if (Test-Path "cms") {
    Remove-Item -Path "cms" -Recurse -Force
    Write-Host "[OK] Old cms/ folder removed" -ForegroundColor Green
}
Write-Host ""

# Display new structure
Write-Host "New Project Structure:" -ForegroundColor Cyan
Write-Host ""
Write-Host "BeaconIR/" -ForegroundColor White
Write-Host "  - docs/              # Documentation" -ForegroundColor Gray
Write-Host "  - beaconir/          # Marketing site" -ForegroundColor Green
Write-Host "      - src/" -ForegroundColor DarkGreen
Write-Host "      - public/" -ForegroundColor DarkGreen
Write-Host "      - package.json" -ForegroundColor DarkGreen
Write-Host "  - cms_beaconir/      # CMS" -ForegroundColor Yellow
Write-Host "      - config/" -ForegroundColor DarkYellow
Write-Host "      - src/" -ForegroundColor DarkYellow
Write-Host "      - package.json" -ForegroundColor DarkYellow
Write-Host ""

# Final instructions
Write-Host "[OK] Reorganization Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Initialize Git in beaconir/:" -ForegroundColor Yellow
Write-Host "   cd beaconir" -ForegroundColor White
Write-Host "   git init" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/gabrielbarbera/beaconir.git" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor White
Write-Host "   git commit -m `"Initial commit: Marketing site`"" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "2. Initialize Git in cms_beaconir/:" -ForegroundColor Yellow
Write-Host "   cd ..\cms_beaconir" -ForegroundColor White
Write-Host "   git init" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/gabrielbarbera/cms_beaconir.git" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor White
Write-Host "   git commit -m `"Initial commit: CMS for Strapi Cloud`"" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. Review the backup at: $backupPath" -ForegroundColor Yellow
Write-Host ""
Write-Host "For more details, see: docs/reorganize-project-structure.md" -ForegroundColor Cyan
Write-Host ""

