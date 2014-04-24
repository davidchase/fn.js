var fnToArray = require('./toArray');
var fnDelay = require('./delay');
var fnApply = require('./apply');

// fn.debounce
module.exports = function (handler, msDelay) {
    'use strict';
    var debouncing;

    return function () {
        var args = fnToArray(arguments);

        if (debouncing) {
            clearTimeout(debouncing);
        }

        debouncing = fnDelay(function () {
            debouncing = false;

            fnApply(handler, args);
        }, msDelay);
    };
};
