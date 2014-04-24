var fnToArray = require('./toArray');

// fn.concat
module.exports = function () {
    'use strict';
    var args = fnToArray(arguments);

    return args[0].concat.apply(args[0], args.slice(1));
};