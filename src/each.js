var fnApply = require('./apply');
var fnConcat = require('./concat');
// fn.each
module.exports = function (handler, collection, params) {
    'use strict';
    for (var index = 0, collectionLength = collection.length; index < collectionLength; index++) {
        fnApply(handler, fnConcat([collection[index], index, collection], params));
    }
};