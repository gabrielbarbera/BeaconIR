# Generate Strapi Secrets for Railway

Write-Host "Generating secrets for Strapi CMS..." -ForegroundColor Green
Write-Host ""

# Generate secrets
$adminJWT = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$jwtSecret = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$apiToken = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$transferToken = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))

# Generate 4 app keys
$appKey1 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKey2 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKey3 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKey4 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKeys = "$appKey1,$appKey2,$appKey3,$appKey4"

Write-Host "Secrets generated!" -ForegroundColor Green
Write-Host ""
Write-Host "Run these commands from the cms directory:" -ForegroundColor Yellow
Write-Host ""
Write-Host 'railway variables --set "ADMIN_JWT_SECRET=' -NoNewline
Write-Host "$adminJWT" -NoNewline
Write-Host '"' -ForegroundColor Green
Write-Host ""
Write-Host 'railway variables --set "JWT_SECRET=' -NoNewline
Write-Host "$jwtSecret" -NoNewline
Write-Host '"' -ForegroundColor Green
Write-Host ""
Write-Host 'railway variables --set "APP_KEYS=' -NoNewline
Write-Host "$appKeys" -NoNewline
Write-Host '"' -ForegroundColor Green
Write-Host ""
Write-Host 'railway variables --set "API_TOKEN_SALT=' -NoNewline
Write-Host "$apiToken" -NoNewline
Write-Host '"' -ForegroundColor Green
Write-Host ""
Write-Host 'railway variables --set "TRANSFER_TOKEN_SALT=' -NoNewline
Write-Host "$transferToken" -NoNewline
Write-Host '"' -ForegroundColor Green
Write-Host ""

