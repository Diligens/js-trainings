let scriptsItems = document.getElementsByClassName('scripts-info-item')
let testElem = document.getElementById('modify-by-js')

console.log("============ SCRIPT 13 LOGS START ============");

console.log('Selecting / get DOM elements:');
console.log(scriptsItems);

console.log('Modifying DOM elements: ')

testElem.textContent = 'ATTENTION! THIS IS HACKER ATTACK!'
testElem.setAttribute('data-bang-time', '9999')
testElem.classList.add('bug')
testElem.setAttribute('style', 'text-decoration: underline; font-size: 20px;')
testElem.style.color = 'red';
testElem.id = 'new-bad-id';

console.log(testElem);