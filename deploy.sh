#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# Configure Git user information
git config user.email "mail@kutaycelebi.com"
git config user.name "Kutay Çelebi"

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kutaycelebi/vcard.git main:gh-pages

cd - 