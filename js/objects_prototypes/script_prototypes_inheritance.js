'use strict';

function Cat(name, color) {
    this.name = name
    this.colo = color
}

var fluffy = new Cat('Fluffy', 'White')

Cat.prototype.age = 3;

display(Cat.prototype)
display(fluffy.__proto__)

var muffin = new Cat('Muffin', 'Brown')

display(muffin.__proto__);