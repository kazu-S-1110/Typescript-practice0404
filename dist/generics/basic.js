"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsBasicSample() {
    // ジェネリック型を使わない場合
    var stringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i] + initialValue;
        }
        return result;
    };
    console.log(stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ' '));
    var numberReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i] + initialValue;
        }
        return result;
    };
    console.log(numberReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0));
    var genericStringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i] + initialValue;
        }
        return result;
    };
    console.log(genericStringReduce(['あ', 'か', 'さ', 'た', 'な', 'え？'], ' '));
    var genericNumberReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i] + initialValue;
        }
        return result;
    };
    console.log(numberReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
}
exports.default = genericsBasicSample;
