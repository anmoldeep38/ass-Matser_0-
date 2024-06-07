const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    points: {
        type: Number,
        default: 5000,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
