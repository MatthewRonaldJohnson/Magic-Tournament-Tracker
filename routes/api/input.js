const router = require("express").Router();
const { User, Tournament, MatchData, Deck } = require("../../models");

// /api/input/
router.post("/", async (req, res) => {
    const { tournament, userDeck, oppDeck, matchData, userId } = req.body
    let userDeckId = await Deck.findOne({ deckName: userDeck.name })
    if (!userDeckId) {
        console.log(userDeck)
        userDeckId = await Deck.create({
            deckName: userDeck.name,
            whiteMana: userDeck.whiteMana,
            blueMana: userDeck.blueMana,
            blackMana: userDeck.blackMana,
            redMana: userDeck.redMana,
            greenMana: userDeck.greenMana,
        })
    }
    let oppDeckId = await Deck.findOne({ deckName: oppDeck.name })
    if (!oppDeckId) {
        oppDeckId = await Deck.create({
            deckName: oppDeck.name,
            whiteMana: oppDeck.whiteMana,
            blueMana: oppDeck.blueMana,
            blackMana: oppDeck.blackMana,
            redMana: oppDeck.redMana,
            greenMana: oppDeck.greenMana,
        })
    }
    const matchId = await MatchData.create({
        wins: matchData.wins,
        losses: matchData.losses,
        result: matchData.wins > matchData.losses ? true : false,
        notes: matchData.notes,
        opponentsName: matchData.oppName,
        opponentDeck: oppDeckId,
    })
    let tournamentId = await Tournament.findOne({ tournamentName: tournament })
    if (!tournamentId) {
        tournamentId = await Tournament.create({
            tournamentName: tournament,
            deck: userDeckId,
            tournamentData: [],
        })
        await User.updateOne(
            { _id: userId },
            { $push: { tournaments: tournamentId } }
        )
    }
    await Tournament.updateOne(
        {_id: tournamentId},
        { $push: {tournamentData: matchId}}
    )

    res.json(tournamentId)
})

module.exports = router;

