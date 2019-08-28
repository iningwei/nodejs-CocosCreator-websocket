@echo off
echo "生成声明文件"
echo.
pbts -o proto.d.ts proto.js
pause