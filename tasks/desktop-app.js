/*jshint es5:true, node: true*/

'use strict';

var os = require('os');

module.exports = function (task) {
    task
    .id('desktop-app')
    .name('Run application for desktop')
    .author('Indigo United')

    // .option('foo', 'The foo option', 'foo default value')
    // .option('bar', 'The bar option', 'bar default value')

    .setup(function (opts, ctx, next) {
        switch (os.platform()) {
        case 'win32':
            opts.win = true;
            break;
        case 'linux':
            // TODO: detect if 32 or 64 and adjust accordingly
            opts.linux32 = true;
            break;
        case 'darwin':
            opts.mac = true;
            break;
        default:
            next(new Error('Could not reliably determine operating system'));
        }

        next();
    })

    .do('run', {
        description: 'Run node-webkit',
        on: '{{mac}}',
        options: {
            cmd: 'open ' + __dirname + '/../desktop/node-webkit.app'
        }
    })

    .do('run', {
        description: 'Run node-webkit',
        on: '{{win}}',
        options: {
            cmd: __dirname + '/../desktop/node-webkit.exe'
        }
    })

    .do('run', {
        description: 'Run node-webkit',
        on: '{{linux32}}',
        options: {
            cmd: __dirname + '/../desktop/node-webkit'
        }
    })

    .do('run', {
        description: 'Run node-webkit',
        on: '{{linux64}}',
        options: {
            cmd: __dirname + '/../desktop/node-webkit'
        }
    });

    // .teardown(function (opts, ctx, next) {
    //     next();
    // });
};