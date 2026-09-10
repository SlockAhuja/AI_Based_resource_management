@echo off
title IEEE ACROSET 2026 - Paper 272 Interactive Research Demonstration
color 0B
cls
echo ==============================================================================
echo    IEEE ACROSET 2026 -- Paper ID: 272
echo    AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G
echo    Presenter: Slock Ahuja ^| Supervisor: Prof. Dr. Praveen Kumar Sharma
echo    Department of ICT, Marwadi University, Gujarat, India
echo ==============================================================================
echo.
echo Starting local research demonstration server on port 3000...
echo.

:: Try to start with local portable node if present or system node
if exist "%~dp0..\node\node.exe" (
    set "PATH=%~dp0..\node;%PATH%"
)

:: Start browser after 2 seconds
start "" http://127.0.0.1:3000/

:: Start Vite Preview / Dev Server
if exist "%~dp0node_modules" (
    call npx vite --host 127.0.0.1 --port 3000
) else (
    echo [INFO] Installing required dependencies (First run only)...
    call npm install
    call npx vite --host 127.0.0.1 --port 3000
)

pause
