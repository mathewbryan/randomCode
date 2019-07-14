class Animal {
    constructor(name, age, colour){
    this.name = name
    this.age = age
    this.colour = colour
}
}

class rabbit extends Animal {
    constructor (name, age, colour, likesCarrots, tail){
    super(name, age, colour)
    this.likesCarrots = likesCarrots
    this.tail = tail
    }
}


class dog extends Animal {
    constructor(name, age, colour, numOfPaws, favFood){
        super(name, age, colour)
        this.numOfPaws = numOfPaws
        this.favFood = favFood
   }

}
let ablus = new rabbit('Albus', 2, 'white', true, 'fluffy')

let ralph = new dog('ralph', 12, 'brown', 4, ['Beef', 'Chicken', 'Scrambled Egg'])

console.log(ablus)
console.log(ralph)
