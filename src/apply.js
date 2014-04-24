// fn.apply
module.exports = function (handler, args) {
    'use strict';
    return handler.apply(null, args);
};