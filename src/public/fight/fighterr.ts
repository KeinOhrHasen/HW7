// Create class Fighter and interafce IPlayer

export default interface IPlayer{
    readonly name: string;
    power:number;
    health: number;
    setDamage(damage: number): void;
    hit(enemy: Fighter, point: number): void;
    knockout():any;
}

export class Fighter implements IPlayer{
    readonly name: string;
    power:number;
    health: number;

    constructor(name, power, health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
  
    public setDamage(damage:number):void{
      this.health = this.health - damage;
      if (this.health >= 0) {
          let message:string = `The health of ${this.name} is equal to ${this.health}`
        writeToHTML(message)
        // console.log(`The health of ${this.name} is equal to ${this.health}`);
      }
    }
  
    public hit(enemy:IPlayer, point:number):void {
      let damageValue:number = this.power * point;
      enemy.setDamage(damageValue);
    }
  
    public knockout() {
      writeToHTML(`${this.name} in knockout !`)
    //   console.log(`${this.name} in knockout !`);
      return new Promise(function(resolve) {
        setTimeout(resolve, 3000);
      }).then(() => {
        writeToHTML("Time is over");
        // console.log("Time is over");
      });
    }
}


export function writeToHTML(message:string):void{
    let box = document.getElementById("message_box");
    let newItem = document.createElement('div');
    newItem.setAttribute("class", "message");
    newItem.innerHTML = message;
    box.appendChild(newItem);
}