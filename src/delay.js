// fn.delay
module.exports = function (handler, msDelay) {
    'use strict';
    return setTimeout(handler, msDelay);
};