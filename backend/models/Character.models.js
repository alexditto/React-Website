const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const CharacterSchema = new Schema({
    name: { type: String, require: true },
    hp : { type: Number, require: true },
    attack : { type: Number, default: 5 },
    level: { type: Number, default: 1 },
    armor : { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    gold: { type: Number, default: 0 },
    inventory: { type: Array },
    alive: { type: Boolean, default: true },
    user : { type: String }
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;