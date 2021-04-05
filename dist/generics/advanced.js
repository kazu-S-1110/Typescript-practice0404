"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsAdvancedSample() {
    var mapStringToNumbers = function (array, fn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            result[i] = fn(item);
        }
        return result;
    };
    var numbers = mapStringToNumbers(['123', '456', '789'], function (item) {
        return Number(item);
    });
    console.log(numbers);
    var mapNumbersToStrings = function (array, fn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            result[i] = fn(item);
        }
        return result;
    };
    var strings = mapNumbersToStrings(numbers, function (item) { return String(item); });
    console.log(strings);
}
exports.default = genericsAdvancedSample;
