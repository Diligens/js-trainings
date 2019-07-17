'use strict';

// Different ways of creating JS objects

/*
* 1. Using Object Literals to Create JavaScript Objects --- very simple
*/
const dog = {
    name: 'Bob Dog',
    color: 'Black',
    speak: function () { display("WOOF!") }
}
display(dog);

/*
* 2. Using Constructor Functions to Create JavaScript Objects -- very common pattern for creating objects in JS
* ES6/ES2015
*/

function Cat(name, color) {
    this.name = name
    this.color = color
}

const cat = new Cat('Kitty', 'Gray');


/*
* 3. Using Object.create ('new' is creating the same under the hood)
*/

const cat_object = Object.create(Object.prototype,
    {
        name: {
            value: 'Kitty',
            enumerable: true,
            writable: true,
            configurable: true
        },
        color: {
            value: 'White',
            enumerable: true,
            writable: true,
            configurable: true
        }
    });

display(cat_object);

/*
* 4. Using ECMAScript 6 Classes to Create JavaScript Objects
*/

class CatClass {
    constructor(name, color) {
        this.name = name,
        this.color = color
    }

    speak() {
        display('Meeooow')
    }
}

const cat_class = new CatClass('Super Kitty', 'White')

display(cat_class)