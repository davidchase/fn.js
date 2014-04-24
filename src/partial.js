var fnToArray = require('./toArray');
var fnApply = require('./apply');
var fnConcat = require('./concat');
// fn.partial
module.exports = function () {
    'use strict';
    var args = fnToArray(arguments);
    var handler = args[0];
    var partialArgs = args.slice(1);

    return function () {
        return fnApply(handler, fnConcat(partialArgs, fnToArray(arguments)) );
    };
};