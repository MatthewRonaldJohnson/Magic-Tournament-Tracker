const router = require("express").Router();
const { User, Tournament } = require("../../models")

// /api/user/:email
router.get('/:email', async (req, res) => {
    let currentUser = await User.findOne({ email: req.params.email})
    if(!currentUser) {
        currentUser = await User.create({
            email: req.params.email,
            decks: [],
            tournaments: []
        })
        console.log('Not current User')
    }
    console.log('+++++++++++++++++++++++++++++++')
    let testArr = ["0"]
    //usersTournaments = await Tournament.find({"_id": {$in: currentUser.tournaments}})
    usersTournaments = await Tournament.find({_id : {$in: testArr}})
    console.log(usersTournaments)
    
    res.json(currentUser);
})

module.exports = router;