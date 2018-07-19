import { Fighter } from "./fighterr";
import IPlayer from "./fighterr";

// Create class ImprovedFighter  and interafce IimprovedPlayer
export interface IimprovedPlayer extends IPlayer {
    doubleHit(enemy: Fighter, point: number):void;
}

export class ImprovedFighter extends Fighter implements IimprovedPlayer{

    public doubleHit(enemy: Fighter, point: number) {
        this.hit(enemy, point*2);
    }
}
