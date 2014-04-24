var fnToArray = require('./toArray');
var fnDelay = require('./delay');
var fnApply = require('./apply');

// fn.throttle
module.exports = function (handler, msDelay) {
    'use strict';
    var throttling;

    return function () {
        var args = fnToArray(arguments);

        if (throttling) {
            return;
        }

        throttling = fnDelay(function () {
            throttling = false;

            fnApply(handler, args);
        }, msDelay);
    };
};