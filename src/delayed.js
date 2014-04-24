var fnDelay = require('./delay');
var fnPartial = require('./partial');
var fnToArray = require('./toArray');
// fn.delayed
module.exports = function (handler, msDelay) {
    'use strict';
    return function () {
        return fnDelay(fnPartial(handler, fnToArray(arguments)), msDelay);
    };
};