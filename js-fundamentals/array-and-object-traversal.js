const surnames = ['Livinus', 'Angela', 'Kizito', 'Bobby']
const firstNames = ['Ezeh', 'Ezra', 'Michael', 'Joshua']

// for (let count = 1; count <= 5; count += 1) {
//   console.log(`I have print my name ${count} times`)
// }

// Take Away infinite loop
// const surnameUpperCase = surnames.map((surname, index) => {
//   let upperCase = surname.toUpperCase()
//   return upperCase
// })

// const surnameUpperCase = surnames.map((surname, index) => {
//   return surname.toUpperCase()
// })

// const surnameUpperCase = surnames.map((surname, index) => surname.toUpperCase())
// const surnameUpperCase = surnames.map(surname => surname.toUpperCase())

// const surnameLastName = surnames.map((surname, index) => {
//   // console.log('index is ', index, `${surname} ${firstNames[index]}`)
//   return `${surname} ${firstNames[index]}`
// })

// console.log(surnameLastName)
const lower = []
const upper = []
const _ = surnames.forEach((surname, index) => {
  lower.push(surname.toLowerCase())
  upper.push(surname.toUpperCase())
})
// console.log(_, lower, upper)

// for (let count = 1; count <= surnames.length; count += 1) {
//   console.log(firstNames[count])
// }

for (let index in surnames) {
  surnames.push(surnames[index] + ' ' + firstNames[index])
}

const _surnames = ['Livinus', [1, 2, 3], 'Angela', 'Kizito', 'Bobby']
// let x = [..._surnames];
let x = Object.assign();

console.log(_surnames, x)
x[0] = 'Livinus Ezeh Ezeh'
x[1][0] = 1000


console.log('\n', _surnames, x)
// Take away: Object.entries(), Object.keys(), Object.values()
// Object.assign()
// Object.freeze()
// Array.flat()

// Given an array of 
// X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Y = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// sumOfXAndY = [16, 18, 20, 22, 24, 26, 28, 30, 32, 34]
// productOfXAndY = [15, 32, 51, 72, 95, 120, 147, 176, 207, 240]
// write two functions that takes an array X, Y and returns 
// 1. sumOfXAndY, 2. productOfXAndY respectively