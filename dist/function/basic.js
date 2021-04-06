"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMessage6 = exports.logMessage5 = exports.alwaysThrowError = exports.logMessage4 = exports.logMessage3 = exports.logMessage2 = exports.logMessage = void 0;
// アロー関数
var logMessage = function (message) {
    console.log(message);
};
exports.logMessage = logMessage;
// 名前付き関数
function logMessage2(message) {
    console.log(message);
}
exports.logMessage2 = logMessage2;
// 関数式
var logMessage3 = function (message) {
    console.log(message);
};
exports.logMessage3 = logMessage3;
// アロー関数の省略記法
var logMessage4 = function (message) { return console.log(message); };
exports.logMessage4 = logMessage4;
var alwaysThrowError = function (message) {
    throw new Error(message);
};
exports.alwaysThrowError = alwaysThrowError;
var logMessage5 = function (message) { return console.log(message); };
exports.logMessage5 = logMessage5;
var logMessage6 = function (message) { return console.log(message); };
exports.logMessage6 = logMessage6;
