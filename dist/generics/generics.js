"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsBasicSample() {
    // ジェネリック型を使わない場合
    var stringReduce = function (array, initialValue) {
        var result = '';
        for (var i = 0; i < array.length; i++) {
            result += array[i] + initialValue;
        }
        return result;
    };
    console.log(stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ' '));
}
exports.default = genericsBasicSample;
