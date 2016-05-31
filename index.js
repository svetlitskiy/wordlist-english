'use strict';

var path = require('path');

module.exports = {};

var nationalities = ['russian'];

nationalities.forEach(function (nationality) {
    [nationality].forEach(function (prefixedNationality) {
        Object.defineProperty(module.exports, prefixedNationality, {
            configurable: true,
            enumerable: true,
            get: function () {
                return require(path.join(__dirname, nationality + '-words.json'));
            }
        });
    });
});
