class Car {
  constructor(id) {
    this.id = id;
  }
  identify(suffix) {
    return `Car Id: ${this.id} ${suffix}`
  }
}

let car = new Car(123);

console.log("============ SCRIPT 07 LOGS START ============");

console.log(car.id);
console.log(car.identify('!!!'));