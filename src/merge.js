var fnReduce = require('./reduce');
var fnEach = require('./each');
var fnProperties = require('./properties');
var fnToArray = require('./toArray');
// fn.merge
module.exports = function () {
    'use strict';
    return fnReduce(function (accumulator, value) {
        fnEach(function (property) {
            accumulator[property] = value[property];
        }, fnProperties(value));

        return accumulator;
    }, {}, fnToArray(arguments));
};