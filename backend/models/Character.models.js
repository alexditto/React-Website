const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const CharacterSchema = new Schema({
    character : { type: String, require : true},
    hp : { type: Number, default: 15 },
    type : { type: String, require: true },
    attack : { type: Number, default: 5 },
    level : { type: Number, default: 1 },
    armor : { type: Number, default: 1 },
    xp : { type: Number, default: 0 },
    gold : { type: Number, default: 0 },
    inventory : { type: Array, default: [] },
    alive : { type: Boolean, default: true },
    user : { type: String, require: true }
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;