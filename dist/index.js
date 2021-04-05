"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var parameters_1 = require("./function/parameters");
// genericsBasicSample();
// genericsAdvancedSample();
// logMessage('Hello world!');
parameters_1.isUserSignedIn('ABC', 'Jack');
parameters_1.isUserSignedIn('ddd');
parameters_1.isUserSignedIn2('ABC');
var arrayNum = [10, 20, 30, 40, 50];
var sum = parameters_1.sumProductsPrice.apply(void 0, __spreadArray([60], arrayNum));
console.log(sum);
