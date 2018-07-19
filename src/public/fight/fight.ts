// create async function fight
import IPlayer from "./fighterr";
import {IimprovedPlayer} from "./improvedFighter";
import {writeToHTML} from "./fighterr";

export async function fight(fighter:IPlayer, improvedFighter:IimprovedPlayer,  ...points: number[]) {
  let steps = <number>points.length;
  let counter:number = 0;

  for (; counter < steps; counter++) {
    if (counter % 2 === 0) {
      fighter.hit(improvedFighter, points[counter]);
    } else {
      improvedFighter.doubleHit(fighter, points[counter]);
    }

    if (fighter.health < 0) {
      fighter.knockout();
      break;
    } else if (improvedFighter.health < 0) {
      improvedFighter.knockout();
      break;
    }
    writeToHTML("They still fight!");
    // console.log("They still fight!")
  }
}
