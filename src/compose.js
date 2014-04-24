var fnApply = require('./apply');
var fnPipeline = require('./pipeline');
var fnReverse = require('./reverse');
// fn.compose
module.exports = function () {
    'use strict';
    return fnApply(fnPipeline, fnReverse(arguments));
};