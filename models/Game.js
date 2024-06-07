const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    betAmount: {
        type: Number,
        required: true,
    },
    betOption: {
        type: String,
        required: true,
    },
    diceRoll: {
        type: [Number],
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
    winnings: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
