const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/../../frontend/build")));
app.use(bodyParser.json());

// 0. Login & Setup
// Play loop
// 1. Deal cards & Bid
// 2. House Sets up - bury bottom & call friends
// 3. Play
// 4. Last trick - reveal bottom
// 5. Scoring, Leveling & Next Game

app.get('/initialize', (req, res) => {
  // Set up the following game rules:
  // -- how many players & where they sit
  // -- how many decks
})

app.get('/deal', (req, res) => {
  // Initialize standard 52 deck cards
  // Have each person draw the cards
  // -- sort the cards as they are drawn
  // -- as card drawing goes on, allow for bidding
  // -- if this is the first round, the person who bids 2 first gets to be "house"
  // -- whichever card is bid, declare that suit to be trump suit
  // Once card drawing is done, house picks up the bottom cards -- if bottom picked up, bidding is finalized
})

app.get('/bury', (req, res) => {
  // If house, bury the cards
  // Then declare a partner
})

app.get('/play', (req, res) => {
  // For each trick, take a turn counter-clockwise:
  // -- select player to play
  // -- if player selected:
  // ----- choose cards to play
  // ----- play cards
  // -- after play cards, display
  // -- select next player to play...
  // Once last player plays, declare who "wins the trick"
  // -- winner of trick, adds those points to his/her pool
  // -- reset play to start with player who won the last trick
})

app.get('/last_play', (req, res) => {
  // If last play, person who wins last trick, gets to reveal the bottom
  // -- if bottom has points, add those points to the winner of the last trick
})

app.get('/level', (req, res) => {
  // At end of game, calculate who won
  // -- the players who won, level up according to his/her point totals
  // The next player from the winning team, gets to serve as "house next"
  // -- initialize the next game with X person has "house", and level up the trump number
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/../../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening http://localhost:${PORT}`);
});