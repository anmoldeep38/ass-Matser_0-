const express = require('express');
const { createPlayer, getPlayer, updatePlayerPoints } = require('../controllers/playerController');

const router = express.Router();

// Define routes for player operations
router.post('/', createPlayer); // Create a new player
router.get('/:id', getPlayer); // Get player by ID
router.put('/:id/points', updatePlayerPoints); // Update player points

module.exports = router;
