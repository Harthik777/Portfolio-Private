# PowerShell script to push portfolio to GitHub
Write-Host "🚀 Pushing Portfolio to GitHub..." -ForegroundColor Cyan

# Check if we're in the right directory
$currentPath = Get-Location
Write-Host "Current directory: $currentPath" -ForegroundColor Yellow

# Check Git status
Write-Host "`n📊 Checking Git status..." -ForegroundColor Green
git status --porcelain

# Check if there are any uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "`n📝 Adding and committing changes..." -ForegroundColor Yellow
    git add .
    git commit -m "feat: Final portfolio updates and optimizations"
}

# Check current branch
$currentBranch = git branch --show-current
Write-Host "`n🌿 Current branch: $currentBranch" -ForegroundColor Green

# Push to GitHub
Write-Host "`n⬆️  Pushing to GitHub..." -ForegroundColor Cyan
try {
    git push origin main
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Portfolio available at: https://github.com/Harthik777/Portfolio-Private" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Error pushing to GitHub: $_" -ForegroundColor Red
    Write-Host "🔄 Trying with force-with-lease..." -ForegroundColor Yellow
    git push origin main --force-with-lease
}

Write-Host "`n🎉 Deployment script completed!" -ForegroundColor Green
