"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumProductsPrice = exports.isUserSignedIn2 = exports.isUserSignedIn = void 0;
// オプションパラメータを持つ関数
var isUserSignedIn = function (userId, username) {
    if (userId === 'ABC') {
        console.log('User is signed in! Username is', username);
        return true;
    }
    else {
        console.log('failed');
        return false;
    }
};
exports.isUserSignedIn = isUserSignedIn;
// デフォルトパラメータを持つ関数
var isUserSignedIn2 = function (userId, username) {
    if (username === void 0) { username = 'No NAME'; }
    if (userId === 'ABC') {
        console.log('User is signed in! Username is', username);
        return true;
    }
    else {
        console.log('failed');
        return false;
    }
};
exports.isUserSignedIn2 = isUserSignedIn2;
// レストパラメータを持つ関数
var sumProductsPrice = function () {
    var productPrice = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productPrice[_i] = arguments[_i];
    }
    return productPrice.reduce(function (prevTotal, productPrice) {
        return prevTotal + productPrice;
    });
};
exports.sumProductsPrice = sumProductsPrice;
