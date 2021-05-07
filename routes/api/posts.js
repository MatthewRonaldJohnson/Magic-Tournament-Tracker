const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;


const fakeObject = {
  userId: "60954692286cef4e641cacc3",
  tournament: "Super Secret FNM",
  userDeck: {
    name: "userDeck Test",
    whiteMana: true,
    blueMana: true,
    blackMana: true,
    redMana: true,
    greenMana: true,
  },
  oppDeck: {
    name: "oppDeck Test",
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: true,
    greenMana: true,
  },
  matchData: {
    wins: 2,
    losses: 1,
    oppName: "Test",
    notes: "This is a test input"
  }
}