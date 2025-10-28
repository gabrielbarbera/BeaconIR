# PowerShell Script to Setup Separate CMS Repository
# Run this script to initialize the CMS in a separate Git repository

Write-Host "🚀 Beacon IR CMS Repository Setup" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "cms\package.json")) {
    Write-Host "❌ Error: cms folder not found. Make sure you're in the BeaconIR root directory." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Found cms folder" -ForegroundColor Green
Write-Host ""

# Navigate to cms folder
Set-Location cms

# Check if git is initialized
if (Test-Path ".git") {
    Write-Host "⚠️  Git repository already initialized in cms folder" -ForegroundColor Yellow
} else {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Cyan
    git init
}

Write-Host ""
Write-Host "🔗 Setting up GitHub remote..." -ForegroundColor Cyan

# Set remote
git remote add origin https://github.com/gabrielbarbera/beaconIRCMS.git

# Check if remote was added successfully
$remotes = git remote -v
if ($remotes -match "beaconIRCMS") {
    Write-Host "✅ Remote added successfully" -ForegroundColor Green
} else {
    Write-Host "⚠️  Remote may already exist. Checking..." -ForegroundColor Yellow
    git remote -v
}

Write-Host ""
Write-Host "📝 Adding files to git..." -ForegroundColor Cyan

# Add all files
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Committing changes..." -ForegroundColor Cyan
    git commit -m "Initial commit: Beacon IR CMS setup for Strapi Cloud"
    Write-Host "✅ Files committed" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No changes to commit" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Next steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Push to GitHub:" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "2. If you get an error about branch name, run:" -ForegroundColor Yellow
Write-Host "   git branch -m main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. After pushing, deploy to Strapi Cloud:" -ForegroundColor Yellow
Write-Host "   - Go to https://cloud.strapi.io" -ForegroundColor White
Write-Host "   - Create new project" -ForegroundColor White
Write-Host "   - Select 'Deploy from GitHub'" -ForegroundColor White
Write-Host "   - Choose: gabrielbarbera/beaconIRCMS" -ForegroundColor White
Write-Host ""
Write-Host "📚 For more details, see: docs/separate-cms-repository.md" -ForegroundColor Cyan
Write-Host ""

# Go back to root
Set-Location ..

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""

