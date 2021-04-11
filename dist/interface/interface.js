"use strict";
// interface Bread {
//   cal: number;
// }
// interface Bread {
//   type: string;
// }
// const francePan: Bread = {
//   //interfaceは勝手に統合されるため拡張性には優れているが、拡張されたくないケースでは不適格。（例えばアプリケーションとか）
//   cal: 600,
//   type: 'hard',
// };
// // typeAliasで表現してみる
// type MaboDofu = {
//   cal: number;
//   spicy: number;
// };
// type Rice = {
//   cal: number;
//   gram: number;
// };
// type MaboDon = MaboDofu & Rice; //交差型（intersection）
// type MaboMabo = MaboDofu | Rice; //合併型（union）
// const maboDon: MaboDon = {
//   cal: 700,
//   spicy: 13,
//   gram: 500,
// };
// const mabomabo: MaboMabo = {
//   cal: 300,
//   gram: 200,
// };
// //interface extends
// interface Book {
//   page: number;
//   title: string;
// }
// interface Magazine extends Book {
//   //継承元はタイプエイリアスでも可能
//   cycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
// }
// const jump: Magazine = {
//   page: 500,
//   title: '週刊少年ジャンプ',
//   cycle: 'weekly',
// };
// // 継承元をタイプエイリアスで書いてみる
// type BookType = {
//   page: number;
//   title: string;
// };
// interface HandBook extends BookType {
//   theme: string;
// }
// const rububu: HandBook = {
//   page: 200,
//   title: 'るぶぶ',
//   theme: '旅行',
// };
// // implementsを使ってclassに型を定義する
// class Comic implements Book {
//   page: number
//   title: string
//   constructor(page: number, title: string,private publishYear:string) {
//     this.page = page
//     this.title = title
//   }
//   getPublishYear() {
//     return `${this.title} published in ${this.publishYear} `
//   }
// }
// const popularComic = new Comic(300, 'OnePiece', "1980")
// console.log(popularComic.getPublishYear())
