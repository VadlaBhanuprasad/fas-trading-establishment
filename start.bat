@echo off
echo Starting FAS Trading ^& Establishment Application...
echo.

if not exist "server\.env" (
    echo Warning: server\.env file not found!
    echo Please create server\.env from server\.env.example
    echo See server\README.md for setup instructions
    pause
    exit /b 1
)

echo Environment file found
echo.

echo Starting backend server...
start "Backend Server" cmd /k "cd server && npm start"

timeout /t 3 /nobreak >nul

echo.
echo Starting frontend development server...
npm run dev

pause
