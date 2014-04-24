// fn.properties 
module.exports = function (object) {
    'use strict';
    var accumulator = [];

    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            accumulator.push(property);
        }
    }

    return accumulator;
};