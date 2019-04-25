let intervalId = setInterval( function() {
  console.log('1 second passed');
}, 1000);

// if need to cancel...
setTimeout( function() {
  clearInterval(intervalId);
}, 8000);

console.log("============ SCRIPT 11 LOGS START ============");

