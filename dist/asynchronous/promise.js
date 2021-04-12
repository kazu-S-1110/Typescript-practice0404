"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
function promiseSample() {
    var url = "https://api.github.com/users/kazu-S-1110";
    var fetchProfile = function () {
        return new Promise(function (resolve, reject) {
            return node_fetch_1.default(url)
                .then(function (res) {
                res
                    .json()
                    .then(function (json) {
                    console.log("Asynchronous Promise:", json);
                    resolve(json); //resolveは完了した合図 
                })
                    .catch(function (error) {
                    console.error(error);
                    reject(null); //rejectは失敗した合図
                });
            })
                .catch(function (error) {
                console.error(error);
                reject(null);
            });
        });
    };
    fetchProfile()
        .then(function (profile) {
        if (profile) {
            console.log("Asynchronous Promise 2:", profile);
        }
    })
        .catch(function () {
    });
}
exports.default = promiseSample;
