function printName() {
  console.log('Ezeh Livinus')
}

// invoke/call the function
printName()
printName()
printName()

const square = (base, power) => {
  console.log(base ** power)
}

// square(2, 4)
// square(6, 2)
// square(3, 3)

const add = function(a, b) {
  return a + b
}

const result = add(2, 3)
console.log(result)
console.log(add(10, result))

/**
 * Take away: create a function that takes firstName 
 * and lastName as arguments and returns the full name
 * 
 * Difference between methods and functions
 * 
 * Create an object call cat that has at least 3 methods
 * 
 * 3 methods each for an array, string and object
 */


const fullName = (firstName, lastName) => {
  let __fullName = firstName + ' ' + lastName;
  // console.log(__fullName)
  return __fullName
}
let x = fullName('Ezeh', 'Livinus')
console.log(x)


x = fullName('Ezeh', 'Livinus')
console.log(x)

x = fullName('Ezeh', 'Livinus')
console.log(x)