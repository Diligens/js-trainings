let userIds = [
  { 
    userId: 132,
    name: 'Dima',
    style: 'red'
  },
  {
    userId: 777,
    name: 'Tanja',
    style: 'blue'
  },
  { 
    userId: 122,
    name: 'Vasya',
    style: 'black'
  },
  {
    userId: 332,
    name: 'Petya',
    style: 'blue'
  },
  {
    userId: 992,
    name: 'Masha',
    style: 'black'
  }
];


console.log("============ SCRIPT 06 LOGS START ============");

userIds.forEach( user => console.log( user ) );
userIds.forEach(
  (user, index) => console.log( user.name, index)
);

let blacks = userIds.filter(
  user => user.style === 'black'
);
console.log(blacks);

let result = userIds.every(
  user => user.userId > 100
);
console.log(result);

let blueUsers = userIds.find(
  user => user.style === 'blue'
);
console.log(blueUsers);