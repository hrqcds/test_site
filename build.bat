@echo off
echo ==========================================
echo    AeroTopo - Build para Producao
echo ==========================================

echo.
echo Limpando build anterior...
if exist dist rmdir /s /q dist

echo.
echo Fazendo build otimizado...
call yarn build

if %errorlevel% neq 0 (
    echo.
    echo ❌ Erro no build!
    pause
    exit /b 1
)

echo.
echo ✅ Build concluido com sucesso!
echo.
echo Arquivos gerados em: dist/
echo - index.html
echo - assets/index.css
echo - assets/index.js
echo.
echo Para testar localmente, execute: yarn serve
echo.

pause
