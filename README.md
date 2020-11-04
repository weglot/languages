# Weglot Languages

To compile scss + json to css, run:

`./node_modules/.bin/node-sass --importer node_modules/node-sass-json-importer/dist/cli.js --recursive ./assets/scss/styles.scss --output ./dist --output-style compressed --source-map true`