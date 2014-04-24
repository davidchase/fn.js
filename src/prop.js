var fnCurry = require('./curry');
// fn.prop
module.exports = fnCurry(function (name, object) {
    'use strict';
    return object[name];
});