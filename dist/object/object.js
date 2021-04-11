"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectSample() {
    // const a: object = {
    //   name: "Jack",
    //   age:20
    // }
    // a.name  <=アクセスできない、型を指定してあげる必要あり
    // オブジェクトリテラル記法で型定義
    var country = {
        language: 'Jap',
        name: 'Japan',
    };
    console.log(country);
    country = {
        language: 'En',
        name: 'USA',
    };
    console.log(country);
    // オプショナルとreadonly
    var character = {
        age: 25,
        lastName: 'Lamy',
        firstName: 'Yukihana',
        gender: 'female',
    };
    character.age = 30;
    // character.lastName = "Noel"  readonlyのため不可
    console.log(character);
    // インデックスシグネチャ
    var capitals = {
        Japan: 'Tokyo',
        USA: 'Washington,DC',
    };
    capitals.China = 'Beijing';
    console.log(capitals);
}
exports.default = objectSample;
