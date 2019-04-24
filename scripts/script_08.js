class Vehicle {
  constructor() {
    this.type = 'car'; // all of these properties will be accessible in the Car class
  }
  start() {
    return `Starting: ${this.type}`
  }
}

class Car extends Vehicle {
  constructor(){
    super(); // keyword is used to access and call functions on an object's parent.
  }
  start() {
    return 'in Car start. ' + super.start();
  }
}
let car = new Car();


console.log("============ SCRIPT 08 LOGS START ============");

console.log(car.type);
console.log(car.start());