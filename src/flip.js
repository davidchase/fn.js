var fnApply = require('./apply');
var fnReverse = require('./reverse');
// fn.flip 
module.exports = function (handler) {
    'use strict';
    return function () {
        return fnApply(handler, fnReverse(arguments));
    };
};