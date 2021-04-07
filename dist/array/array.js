"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arraySample() {
    // シンプルな型定義
    var colors = ["red", "blue"];
    colors.push("yellow");
    // colors.push(123) 数値型だからできないよ
    console.log(colors);
    // 別の配列の型定義方法
    var even = [2, 4, 6, 8, 10];
    even.push(10);
    // even.push("dd") 文字列型だからできないよ
    console.log(even);
}
exports.default = arraySample;
