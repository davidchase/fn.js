// fn.type
module.exports = function (value) {
    'use strict';
    // If the value is null or undefined, return the stringified name,
    // otherwise get the [[Class]] and compare to the relevant part of the value
    return value == null ?
        '' + value :
        ({}).toString.call(value).slice(8, -1).toLowerCase();
};