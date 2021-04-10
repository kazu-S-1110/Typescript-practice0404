"use strict";
var francePan = {
    //interfaceは勝手に統合されるため拡張性には優れているが、拡張されたくないケースでは不適格。（例えばアプリケーションとか）
    cal: 600,
    type: 'hard',
};
var maboDon = {
    cal: 700,
    spicy: 13,
    gram: 500,
};
var mabomabo = {
    cal: 300,
    gram: 200,
};
var jump = {
    page: 500,
    title: '週刊少年ジャンプ',
    cycle: 'weekly',
};
var rububu = {
    page: 200,
    title: 'るぶぶ',
    theme: '旅行',
};
// implementsを使ってclassに型を定義する
var Comic = /** @class */ (function () {
    function Comic(page, title, publishYear) {
        this.publishYear = publishYear;
        this.page = page;
        this.title = title;
    }
    Comic.prototype.getPublishYear = function () {
        return this.title + " published in " + this.publishYear + " ";
    };
    return Comic;
}());
var popularComic = new Comic(300, 'OnePiece', "1980");
console.log(popularComic.getPublishYear());
