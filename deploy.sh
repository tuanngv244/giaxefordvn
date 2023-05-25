#!/bin/bash

# Clone your Next.js repository
git clone https://github.com/tuanngv244/giaxefordvn

# Move into the repository directory
cd giaxefordvn

# Install dependencies
npm ci

# Build the Next.js application
npm run build

# Move the built files to the public folder
mv .next/* public/

# Deploy the application to Hostinger using FTP
curl -T public/* -u u522678529:tuannv5075Aa- ftp://giaxefordvn.com/public_html/
