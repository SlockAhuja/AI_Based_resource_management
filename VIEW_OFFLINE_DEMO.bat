@echo off
title IEEE ACROSET 2026 - Offline Research Demonstration (Paper ID: 272)
cls
echo ==============================================================================
echo    Opening IEEE ACROSET 2026 Paper 272 Standalone Offline Application...
echo    Presenter: Slock Ahuja ^| Supervisor: Prof. Dr. Praveen Kumar Sharma
echo ==============================================================================
echo.
start "" "%~dp0dist\index.html"
echo Application opened in your default web browser!
timeout /t 5 >nul
