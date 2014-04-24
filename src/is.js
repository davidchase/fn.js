var fnType = require('./type.js');
// fn.is
module.exports = function (type, value) {
    'use strict';
    return type === fnType(value);
};