const router = require("express").Router();
const { User, Tournament, MatchData, Deck } = require("../../models");

// /api/input/
router.post("/", async (req, res) => {
    const { tournament, format, userDeck, oppDeck, matchData, userID } = req.body
    let userDeckId = await Deck.findOne({ deckName: userDeck.name, format: format })
    if (!userDeckId) {
        userDeckId = await Deck.create({
            deckName: userDeck.name,
            format: format,
            whiteMana: userDeck.whiteMana,
            blueMana: userDeck.blueMana,
            blackMana: userDeck.blackMana,
            redMana: userDeck.redMana,
            greenMana: userDeck.greenMana,
        })
        await User.updateOne(
            { _id: userID },
            { $push: { decks: userDeckId } }
        )
    }
    let oppDeckId = await Deck.findOne({ deckName: oppDeck.name, format: format })
    if (!oppDeckId) {
        oppDeckId = await Deck.create({
            deckName: oppDeck.name,
            format: format,
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
    let tournamentId = await Tournament.findOne({ tournamentName: tournament, userId: userID })
    if (!tournamentId) {
        tournamentId = await Tournament.create({
            tournamentName: tournament,
            userId: userID,
            format: format,
            deck: userDeckId,
            tournamentData: [],
        })
        await User.updateOne(
            { _id: userID },
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

