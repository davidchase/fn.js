var fnCloneArray = require('./toArray');
// fn.reverse
module.exports = function (collection) {
    'use strict';
    return fnCloneArray(collection).reverse();
};