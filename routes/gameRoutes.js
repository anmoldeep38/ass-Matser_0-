const express = require('express');
const { createPlayer, getPlayer, rollDice } = require('../controllers/gameController');

const router = express.Router();

router.post('/player', createPlayer);
router.get('/player', getPlayer);
router.post('/roll-dice', rollDice);

module.exports = router;


// seven-up-seven-down/
// ├── server/
// │   ├── controllers/
// │   │   └── gameController.js
// │   ├── routes/
// │   │   └── gameRoutes.js
// │   ├── models/
// │   ├── config/
// │   │   └── db.js
// │   ├── middleware/
// │   ├── utils/
// │   ├── server.js
// │   ├── package.json
// │   └── .env
