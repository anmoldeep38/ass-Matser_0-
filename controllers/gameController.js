let player = {
    points: 5000
};

// Helper function to roll dice
const rollDiceHelper = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    return [dice1, dice2];
};

// Create a new player
const createPlayer = (req, res) => {
    player.points = 5000;
    res.status(201).json(player);
};

// Get current player points
const getPlayer = (req, res) => {
    res.json(player);
};

// Roll dice and calculate result
const rollDice = (req, res) => {
    const { betAmount, betOption } = req.body;

    if (player.points < betAmount) {
        return res.status(400).json({ message: 'Insufficient points' });
    }

    const [dice1, dice2] = rollDiceHelper();
    const total = dice1 + dice2;
    let result = 'lose';
    let winnings = 0;

    if (betOption === '7' && total === 7) {
        result = 'win';
        winnings = betAmount * 5;
    } else if (betOption === '7 up' && total > 7) {
        result = 'win';
        winnings = betAmount * 2;
    } else if (betOption === '7 down' && total < 7) {
        result = 'win';
        winnings = betAmount * 2;
    }

    if (result === 'win') {
        player.points += winnings;
    } else {
        player.points -= betAmount;
    }

    res.json({ dice: [dice1, dice2], total, result, winnings, points: player.points });
};

module.exports = { createPlayer, getPlayer, rollDice };
