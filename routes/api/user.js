const router = require("express").Router();
const User = require("../../models/User");

// /api/user/:email
router.get('/:email', async (req, res) => {
    currentUser = await User.findOne({ email: req.params.email})
    if(!currentUser) {
        currentUser = await User.create({
            email: req.params.email,
            decks: [],
            tournaments: []
        })
        console.log('Not current User')
    }
    
    res.json(currentUser);
})

module.exports = router;