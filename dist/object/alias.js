"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeAliasSample() {
    var japan = {
        capital: 'Tokyo',
        language: 'Japanese',
        name: 'Japan',
    };
    console.log(japan);
    var america = {
        capital: 'Washington,D.C.',
        language: 'Eng',
        name: 'United State of America',
    };
    console.log(america);
    var adventurer1 = {
        hp: 100,
        mp: 40,
        weapon: 'stuff',
        magicSkill: 'fire',
    };
    var adventurer2 = {
        hp: 100,
        sp: 40,
        weapon: 'spire',
        swordSkill: 'slash',
    };
    var paladin = {
        hp: 300,
        mp: 100,
        sp: 30,
        weapon: 'sword',
        swordSkill: 'slash',
        magicSkill: 'thunder',
    };
    console.log(adventurer1, adventurer2, paladin);
}
exports.default = typeAliasSample;
