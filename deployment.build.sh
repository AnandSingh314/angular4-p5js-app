#!/usr/sh
# https://github.com/angular/angular-cli/wiki/stories-github-pages
# ng build --prod --output-path docs --base-href PROJECT_NAME
ng build --prod --output-path docs 

git add --all

git commit -m 'commit message'

git push -u origin master



