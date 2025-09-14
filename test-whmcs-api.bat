@echo off
echo Testing WHMCS API Connection...
echo.

REM Replace these values with your actual WHMCS credentials
set WHMCS_URL=https://secure.outsourceis.com
set WHMCS_IDENTIFIER=your-api-identifier
set WHMCS_SECRET=your-api-secret

echo Testing API endpoint: %WHMCS_URL%/includes/api.php
echo.

curl -X POST "%WHMCS_URL%/includes/api.php" ^
  -H "Content-Type: application/x-www-form-urlencoded" ^
  -d "action=GetSystemStats" ^
  -d "identifier=%WHMCS_IDENTIFIER%" ^
  -d "secret=%WHMCS_SECRET%" ^
  -d "responsetype=json"

echo.
echo.
echo If you see a JSON response with "result":"success", your API is working.
echo If you see an error, check your credentials and API permissions.
echo.
pause
