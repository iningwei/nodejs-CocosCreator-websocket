@echo off
echo "导协议"
echo.
pbjs -t static-module -w commonjs -o proto.js *.proto
pause