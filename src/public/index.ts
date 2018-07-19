import { Fighter } from "./fight/fighterr";
import { ImprovedFighter } from "./fight/improvedFighter";
import { fight } from "./fight/fight";

// create two instances
let player1 = new Fighter("Batman", 3, 100);
let player2 = new ImprovedFighter("Superman", 3, 100);

// call fight function
fight(player1, player2, 15, 13, 4 , 6, 8, 10, 5 , 6);
