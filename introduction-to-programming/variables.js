// we should not use var keyword, it pollutes the global scope
var firstName = 'Ezeh';
var firstName = 'Livinus'

// instead we should use let keyword
let lastName = 'Ezeh Livinus'; // variable declaration and initialization
lastName = 'Livinus'; // variable reassignment
let surname; // variable declaration

console.log(firstName, lastName, surname); // undefined undefined undefined

// let and const