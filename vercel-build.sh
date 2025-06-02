#!/bin/bash

# Increase Node.js memory limit to prevent esbuild crashes
export NODE_OPTIONS="--max-old-space-size=4096"

# Install dependencies
npm install

# Explicitly install the platform-specific Rollup dependency
npm install @rollup/rollup-linux-x64-gnu@4.9.5

# Build the project
npm run build