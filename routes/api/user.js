const router = require("express").Router();
const { User, Tournament, MatchData } = require("../../models")

// /api/user/:email
router.get('/:email', async (req, res) => {
    let currentUser = await User.findOne({ email: req.params.email })
        .populate("decks")
        .populate("tournaments")
        .populate({
            path: "tournaments",
            populate: {
                path: "deck",
                model: "Deck"
            }
        })
        .populate({
            path: "tournaments",
            populate: {
                path: "tournamentData",
                model: "MatchData"
            }
        })
        .populate({
            path: "tournaments",
            populate: {
                path: "tournamentData",
                populate: {
                    path: "opponentDeck",
                    model: "Deck",
                }
            }
        })
    if (!currentUser) {
        currentUser = await User.create({
            email: req.params.email,
            decks: [],
            tournaments: []
        })
    }
    res.json(currentUser);
})

module.exports = router;