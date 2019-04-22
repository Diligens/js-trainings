let o = {
  carId: 123,
  getId: function(arg) {
    return this.carId + " " + arg;
  }
};

let newCar = { 
  carId: 456 
}; 

let numbers = [1, 2, 419, 234, 21, 0, -3, 9];

let newFunc = o.getId.bind(newCar)

console.log("============ APP 02 LOGS START ============");

console.log(o.getId.call(newCar, "of newCar")); // Call: create new context for function getId
console.log(Math.max.apply(null, numbers)); // Apply: get max number. At the same context, but arguments in array
console.log(newFunc()); // Copy method/function from object o to newFunc
console.log(o.getId(' from Chicago'))