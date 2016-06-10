/**
 * Created by TEJA on 6/9/2016.
 */

'use strict';

//creating an object using object literal

var kingdoms = {
    north: 'starks',
    south: 'lannisters',
    wall: 'nightsWatch'
};
console.log(kingdoms);
//objects are mutable so changing kingdoms.north and making it nested object

kingdoms.south = {
    king: "Ed Stark",
    son1: "Rob Stark",
    son2: "John Snow",
    son3: "brandon stark",
    son4: "Rickon Stark",
    Queen: "Catelyn Stark"
};

console.log(kingdoms);

//creating an object using new Keyword

var gladiators = new Object();

gladiators.place = "Rome";
gladiators.type = "fighters";
gladiators.house = "Batiatis";
gladiators.legend = "Spartacus";
console.log(gladiators);

//creating an object using Constructor function
//standard way to create an object prototype is by using object constructor function
function Cartoon(character1, character2, type, rating) {
    this.character1 = character1;
    this.character2 = character2;
    this.type = type;
    this.rating = rating;
}
var tomAndJerry = new Cartoon("Tom", "Jerry", "comedy", 10);
var scoobyDoo = new Cartoon("Scooby", "Shaggy", "Mystery", 10);

console.log(tomAndJerry);
console.log(scoobyDoo);

