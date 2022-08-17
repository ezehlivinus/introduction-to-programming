const dog = {
  name: 'Jark',
  age: 3,

  'my-owner': 'Livinus',

  bark() {
    console.log('Bark Bark')
  },

  cry () {
    return 'crying'
  },

  printName () {
    console.log(this.name, this.age)
  },

  setColor (color) {
    console.log(typeof(this.age), typeof(color))
    this.age = color // cat.color = 'blue'
  },

  hubs: [`Genesys`, 'TechHub', 'Andela', 'HNG', 'Zuri'],

  updateHubsFirstElement() {
    this.hubs[0] = `${this.hubs[0]} ${this.age + 3} `
  },

  getColor () {
    return this.color
  }
}

dog.updateHubsFirstElement()
console.log(dog['name'])
console.log(dog.age)
console.log(dog['my-owner'])

dog.bark()
let y = dog.cry()
console.log(y + ' ' + new Date(), y)

dog.printName()

dog.setColor(5)
dog.age = 5
// console.log(dog)
console.log(dog.hubs)
console.log(dog)
console.log('Ezeh\n\n\n\tLivinus')