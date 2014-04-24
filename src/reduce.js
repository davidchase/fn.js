var fnEach = require('./each');
var fnApply = require('./apply');
var fnConcat = require('./concat');

// fn.reduce
module.exports = function (handler, accumulator, collection, params) {
    'use strict';
    fnEach(function (value, index) {
        accumulator = fnApply(handler, fnConcat([accumulator, value, index], params));
    }, collection);

    return accumulator;
};