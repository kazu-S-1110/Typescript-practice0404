"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectSample() {
    var a = {
        name: "Jack",
        age: 20
    };
    // a.name  <=アクセスできない、型を指定してあげる必要あり
    // オブジェクトリテラル記法で型定義
    var country = {
        language: "Jap",
        name: "Japan"
    };
    console.log(country);
    country = {
        language: "En",
        name: "USA"
    };
    console.log(country);
}
exports.default = objectSample;
