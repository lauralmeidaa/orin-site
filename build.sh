#!/bin/bash

# Create output directory
mkdir -p out

# Copy all HTML, CSS, and other assets to out folder
cp *.html out/
cp *.css out/
cp *.png out/
cp -r Assets out/ 2>/dev/null || :
cp *.js out/

echo "Build complete! Your files are in the 'out' folder."
