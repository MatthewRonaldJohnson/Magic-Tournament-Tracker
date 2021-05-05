const router = require("express").Router();
const { User, Tournament, MatchData } = require("../../models")

// /api/user/:email
router.get('/:email', async (req, res) => {
    let currentUser = await User.findOne({ email: req.params.email})
    if(!currentUser) {
        currentUser = await User.create({
            email: req.params.email,
            decks: [],
            tournaments: []
        })
    }
    usersTournaments = await Tournament.find({_id : {$in: currentUser.tournaments}})
    currentUser.tournaments = usersTournaments;
    console.log(currentUser)
    res.json(currentUser);
})

module.exports = router;