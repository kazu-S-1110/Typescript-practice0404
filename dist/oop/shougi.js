"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 駒の位置を表すクラス
var Position = /** @class */ (function () {
    function Position(suji, dan) {
        this.suji = suji;
        this.dan = dan;
    }
    // パラメータに渡された位置と現在の位置を比較するメソッド
    Position.prototype.distanceFrom = function (position, player) {
        if (player === 'first') {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan)),
            };
        }
        else {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: -Math.abs(Number(position.dan) - Number(this.dan)),
            };
        }
    };
    return Position;
}());
var Piece = /** @class */ (function () {
    function Piece(player, suji, dan) {
        this.player = player;
        this.position = new Position(suji, dan);
    }
    // メソッドの定義
    // 駒の移動用のメソッド
    Piece.prototype.moveTo = function (position) {
        this.position = position;
    };
    return Piece;
}());
var Osho = /** @class */ (function (_super) {
    __extends(Osho, _super);
    function Osho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //canMoveToメソッドを具体的に実装する
    Osho.prototype.canMoveTo = function (position, player) {
        var distance = this.position.distanceFrom(position, player);
        return distance.suji < 2 && distance.dan < 2;
    };
    return Osho;
}(Piece));
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = Game.makePieces();
    }
    Game.makePieces = function () {
        return [new Osho('first', 5, '1'), new Osho('second', 5, '9')];
    };
    return Game;
}());
