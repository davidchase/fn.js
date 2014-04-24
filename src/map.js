var fnReduce = require('./reduce');
var fnApply = require('./apply');
var fnConcat = require('./concat');
// fn.map 
module.exports = function (handler, collection, params) {
    'use strict';
    return fnReduce(function (accumulator, value, index) {
        accumulator.push(fnApply(handler, fnConcat([value, index, collection], params)));
        return accumulator;
    }, [], collection);
};