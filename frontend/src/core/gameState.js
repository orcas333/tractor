
class GameState {
    constructor() {
        this.num_decks = 2;
        this.num_players = 5;

    }

    deal(player0) {
        player0.dealt("5h");
    }

}

const { Player } = require("./player");

let game = new GameState();
let player0 = new Player();
let player1 = new Player();

game.deal(player0)

console.log(game.num_decks);
