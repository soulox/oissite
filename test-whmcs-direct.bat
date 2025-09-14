@echo off
echo ========================================
echo WHMCS 7.10.2 Direct API Test
echo ========================================
echo.

REM Replace these with your actual WHMCS credentials
set WHMCS_URL=https://secure.outsourceis.com
set WHMCS_IDENTIFIER=your-api-identifier
set WHMCS_SECRET=your-api-secret

echo Testing WHMCS API at: %WHMCS_URL%
echo.

echo ========================================
echo Test 1: GetSystemStats
echo ========================================
curl -X POST "%WHMCS_URL%/includes/api.php" ^
  -H "Content-Type: application/x-www-form-urlencoded" ^
  -d "action=GetSystemStats" ^
  -d "identifier=%WHMCS_IDENTIFIER%" ^
  -d "secret=%WHMCS_SECRET%" ^
  -d "responsetype=json"

echo.
echo.
echo ========================================
echo Test 2: GetProducts
echo ========================================
curl -X POST "%WHMCS_URL%/includes/api.php" ^
  -H "Content-Type: application/x-www-form-urlencoded" ^
  -d "action=GetProducts" ^
  -d "identifier=%WHMCS_IDENTIFIER%" ^
  -d "secret=%WHMCS_SECRET%" ^
  -d "responsetype=json"

echo.
echo.
echo ========================================
echo Test 3: GetClients (if you have clients)
echo ========================================
curl -X POST "%WHMCS_URL%/includes/api.php" ^
  -H "Content-Type: application/x-www-form-urlencoded" ^
  -d "action=GetClients" ^
  -d "identifier=%WHMCS_IDENTIFIER%" ^
  -d "secret=%WHMCS_SECRET%" ^
  -d "responsetype=json"

echo.
echo.
echo ========================================
echo Test 4: Verbose Test (shows headers)
echo ========================================
curl -v -X POST "%WHMCS_URL%/includes/api.php" ^
  -H "Content-Type: application/x-www-form-urlencoded" ^
  -d "action=GetSystemStats" ^
  -d "identifier=%WHMCS_IDENTIFIER%" ^
  -d "secret=%WHMCS_SECRET%" ^
  -d "responsetype=json"

echo.
echo.
echo ========================================
echo Instructions:
echo ========================================
echo 1. Replace WHMCS_IDENTIFIER and WHMCS_SECRET with your actual values
echo 2. Run this script
echo 3. Look for "result":"success" in the responses
echo 4. If you see 403 errors, check your WHMCS API settings
echo.
pause
