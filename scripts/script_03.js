let getId = () => 123;
let getId2 = _ => 12345;

let getName = name => 'My name is ' + name;

let getSum = (num1, num2) => {
  sum = num1 + num2;
  return `${num1} + ${num2} = ${sum}`;
}

let myCity = (message='', city="Saint-Petersburg") => {
  return `At the moment I live in ${city}. ${message}`;
}

console.log("============ SCRIPT 03 LOGS START ============");

console.log(getId());
console.log(getName('John Smith'));
console.log(getSum(12123, 1212));
console.log(getId2());

console.log(myCity());
console.log(myCity('Because now I working here on a new project.', 'NY city'))