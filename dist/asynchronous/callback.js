"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
function callbackSample() {
    var url = "https://api.github.com/users/kazu-S-1110";
    // コールバックで呼び出す非同期処理
    var fetchProfile = function () {
        return node_fetch_1.default(url)
            .then(function (res) {
            res
                .json()
                .then(function (json) {
                console.log("Asynchronous call back :", json);
                return json;
            })
                .catch(function (error) {
                console.error(error);
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    var profile = fetchProfile();
    console.log("Asynchronous call back 2:", profile);
}
exports.default = callbackSample;
