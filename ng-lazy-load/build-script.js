
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/ng-lazy-load/main-es2015.js',
        './dist/ng-lazy-load/polyfills-es2015.js',
        './dist/ng-lazy-load/runtime-es2015.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/app.js')
    console.info('Angular Elements created successfully!')

})()