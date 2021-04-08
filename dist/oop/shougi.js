"use strict";
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());
// 駒の位置を表すクラス
var Position = /** @class */ (function () {
    function Position(suji, dan) {
        this.suji = suji;
        this.dan = dan;
    }
    // パラメータに渡された位置と現在の位置を比較するメソッド
    Position.prototype.distanceFrom = function (position, player) {
        if (player === "first") {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan))
            };
        }
        else {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: -(Math.abs(Number(position.dan) - Number(this.dan))) //段（縦の位置）は正負反転
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
