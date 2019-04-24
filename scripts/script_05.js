let jsonIn = `
  [
    {"userId" : 1},
    {"userId" : 2},
    {"userId" : 3}
  ]
`

let userIds = JSON.parse(jsonIn);

console.log("============ SCRIPT 05 LOGS START ============");

console.log('after JSON.parse: ');
console.log(userIds);
userIds = JSON.stringify(userIds);
console.log('after JSON.stringify: ');
console.log(userIds);
