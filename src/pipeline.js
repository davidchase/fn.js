var fnToArray = require('./toArray');
var fnReduce = require('./reduce');
var fnApply = require('./apply');
// fn.pipeline
module.exports = function () {
    'use strict';
    var functions = fnToArray(arguments);

    return function () {
        return fnReduce(function (args, func) {
            return [fnApply(func, args)];
        }, fnToArray(arguments), functions)[0];
    };
};