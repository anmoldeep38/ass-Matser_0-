const Player = require('../models/Player');

// Create a new player
const createPlayer = async (req, res) => {
    try {
        const { name } = req.body;
        const newPlayer = new Player({ name });
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get player by ID
const getPlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update player points
const updatePlayerPoints = async (req, res) => {
    try {
        const { points } = req.body;
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        player.points = points;
        await player.save();
        res.json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createPlayer, getPlayer, updatePlayerPoints };
