// === create method start() inside the function Car

// function Car(id) {
//   this.carId = id;
//   this.start = function() {
//     console.log('start: ' + this.carId);
//   }
// }

// === create method start() like prototype

function Car(id) {
  this.carId = id;
}

Car.prototype.start = function() {
  console.log('start: ' + this.carId);
};

let car = new Car(123);



String.prototype.reverse = function() {
  let reverseString = this.toString().split("").reverse().join("");
  return this.toString() + ' -><- ' + reverseString;
};

String.prototype.reverse2 = function() {
  let newString = "";
  for (var i = this.toString().length - 1; i >= 0; i--) { 
    newString += this.toString()[i];
  }
  let reverseString = newString;
  return this.toString() + ' -><- ' + reverseString;
};

function reverse3(str) {
  if (str === "")
    return "";
    
    else
  return reverse3(str.substr(1)) + str.charAt(0);
}

String.prototype.reverse4 = function() {
  return this.toString() + ' -><- ' + [...this.toString()].reverse().join('');
};



console.log("============ SCRIPT 04 LOGS START ============");

car.start();
console.log(car);
console.log('1. ' + 'mirror'.reverse());
console.log('2. ' + 'mirror'.reverse2());
console.log('3. ' + reverse3('mirror'));
console.log('4. ' + 'mirror'.reverse4());