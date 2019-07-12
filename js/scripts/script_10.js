import { Car } from './models/car';

window.SUPERSOMETHING = true;
// SOMETHINGNOTGOOD = true; // not working, because we import module Car

window.localStorage.MEMORY = 'I remember allllllll!!!!';
window.name = 'HOME PAGE for js-trainings';

console.log("============ SCRIPT 10 LOGS START ============");

console.log(window);
console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.closed + ' - this window is closed or not');
console.log(window.crypto);
console.log(window.document);
console.log(window.fullScreen + ' - window.fullScreen supporting only mozilla firefox 25.04.2019');
console.log(window.history);
console.log(window.location);
console.log(window.localStorage);
console.log(window.name);
console.log(window.performance);
