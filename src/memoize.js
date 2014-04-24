var fnToArray = require('./toArray');
var fnApply = require('./apply');
// fn.memoize
module.exports = function memoize(handler, serializer) {
    'use strict';
    var cache = {};

    return function () {
        var args = fnToArray(arguments);
        var key = serializer ? serializer(args) : memoize.serialize(args);

        return key in cache ?
            cache[key] :
            cache[key] = fnApply(handler, args);
    };
};