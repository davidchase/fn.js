var fnToArray = require('./toArray');
// fn.curry
module.exports = function (handler, arity) {
    'use strict';
    if (handler.curried) {
        return handler;
    }

    arity = arity || handler.length;

    var curry = function curry() {
        var args = fnToArray(arguments);

        if (args.length >= arity) {
            return handler.apply(null, args);
        }

        var inner = function () {
            return curry.apply(null, args.concat(fnToArray(arguments)));
        };

        inner.curried = true;

        return inner;
    };

    curry.curried = true;

    return curry;
};