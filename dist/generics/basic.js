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
    console.log(genericNumberReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
    // いろいろなジェネリック型の定義方法
    // 完全な呼び出しシグネチャ（個々のシグネチャにジェネリック型を割り当てる）
    // type GenericReduce2 = {
    //   <T>(array: T[], initialValue: T): T
    //   <U>(array: U[], initialValue: U): U
    // }
    // 呼び出しシグネチャの省略記法
    // type GenericReduce3<T> = (array: T[], initialValue: T) => T
    // type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
exports.default = genericsBasicSample;
