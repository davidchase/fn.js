var fnReduce = require('./reduce');
// fn.filter
module.exports = function (expression, collection) {
    'use strict';
    return fnReduce(function (accumulator, item, index) {
        expression(item, index) && accumulator.push(item);
        return accumulator;
    }, [], collection);
};