#!/bin/bash

# abort on errors
set -e

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy for github pages'

git push -f https://github.com/snurby7/financial-vue.git master:gh-pages

cd -