@echo off
echo ========================================
echo WHMCS SSL Connection Test
echo ========================================
echo.

echo Testing SSL connection to WHMCS server...
echo.

echo ========================================
echo Test 1: Basic HTTPS Connection
echo ========================================
curl -I "https://secure.outsourceis.com"

echo.
echo ========================================
echo Test 2: API Endpoint Check
echo ========================================
curl -I "https://secure.outsourceis.com/includes/api.php"

echo.
echo ========================================
echo Test 3: SSL Certificate Details
echo ========================================
curl -v "https://secure.outsourceis.com" 2>&1 | findstr "SSL\|certificate\|verify"

echo.
echo ========================================
echo Test 4: HTTP Alternative (if HTTPS fails)
echo ========================================
curl -I "http://secure.outsourceis.com/includes/api.php"

echo.
echo ========================================
echo Instructions:
echo ========================================
echo 1. If you see SSL/certificate errors above, your WHMCS server has SSL issues
echo 2. For development, you can temporarily use HTTP instead of HTTPS
echo 3. For production, fix the SSL certificate on your WHMCS server
echo 4. Update your .env.local to use HTTP if needed:
echo    WHMCS_URL="http://secure.outsourceis.com"
echo.
pause
