"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tupleSample() {
    // 一般的なタプルの型定義
    var response = [200, "Lamy"]; //順番も個数も固定される
    response = [500, "Noel"]; //入れ替えることは可能
    // response = [100,"Peko","Marin"] //個数オーバー
    // response = [400,114514] //型が違うからダメ
    console.log(response);
}
exports.default = tupleSample;