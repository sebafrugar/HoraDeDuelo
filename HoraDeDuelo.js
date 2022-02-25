

class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res; 
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res = target.res-this.power;
            console.log(`la carta ${this.name} con poder : ${this.power} ataca a ${target.name} quedando con resistencia : ${target.res}`);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
    super(name,cost);
    this.text = text;
    this.stat = stat;
    this.magnitud = magnitud;
    }
    CartaEfecto(target){
        if (target instanceof Unit) {
            console.log(target);
            if (this.stat === "resiliencia"){
              target.res +=  this.magnitud ;
            }
            if (this.stat === "poder"){
              target.power += this.magnitud;
            }           
            console.log(`Haz usado una carta efecto de Nombre:${this.name} Costo: ${this.cost} Texto: ${this.text} Stats: ${this.stat} Maginitud: ${this.magnitud}`)
          } 
          else {
            throw new Error("Target must be a unit!");
          }
    }
}
//turno 1
const BeltNinja1 = new Unit("NinjaCinturonRojo", 3, 3, 4); //El jugador 1 convoca a "Ninja Cinturón Rojo"
console.table(BeltNinja1)
const algoritmoDificil = new Effect("Algoritmo Dificil",2,"Aumenta la resistencia del objetivo en 3", "resiliencia",3); // creacion carta algoritmoDificil
algoritmoDificil.CartaEfecto(BeltNinja1); // 	El jugador 1 juega "Algoritmo Dificil" en "Ninja Cinturón Rojo"
console.table(BeltNinja1);

console.log("\n\n");
//turno 2
const BeltNinja2 = new Unit("NinjaCinturonNegro", 4, 5, 4);
console.table(BeltNinja2)
const RechazoDePromesa = new Effect ("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","resiliencia",2); // creacion carta RechazoDePromesa
RechazoDePromesa.CartaEfecto(BeltNinja2) // 	El jugador 1 juega "Rechazo De Promesa" en "Ninja Cinturón Negro"
console.table(BeltNinja2)

// turno 3
const ProgramacionEnPareja = new Effect ("Programacio en Pareja",3,"aumentar el poder del objetivo en 2","poder",2); // creacion carta ProgramacionEnPareja
ProgramacionEnPareja.CartaEfecto(BeltNinja1); // 	El jugador 1 juega "Programacion En Pareja" en "Ninja Cinturón Rojo"
console.log("\n");
BeltNinja1.attack(BeltNinja2);