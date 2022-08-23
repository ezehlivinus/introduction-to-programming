const toDoList = {
  list: [],

  factory(todo = {}) {
    this.list.push(todo)
  },

  validateContent (content) {
    const isArray = Array.isArray(content)
    if ( isArray ) {
      return true
    }
    throw new Error('content is not array')
  }, 

  create(title, content) {
    this.validateContent(content)

    const id = Date.now()
    const createdAt = new Date().toISOString()
    const updateAt = new Date().toISOString()

    const newList = {
      title, id, content, createdAt, updateAt
    }

    this.factory(newList)
    return id;
  },

  findById(id) {
    const todo = this.list.find((_list) => _list.id === id)
    return todo
  },

  findAll() {
    return this.list
  },

  updateById(id, title = '', content = []) {
    const todo = this.findById(id)
    if (!todo) {
      console.log(`The todo with the provided id of ${id} might have been delete or not found`)
      return undefined
    }

    updateTodo = {}
    const newList = this.list.map((_list, index) => {
      if (_list.id === id) {
        this.list[index].title = title
        this.list[index].content = content
        this.list[index].updateAt = new Date().toISOString()
      }

      return _list
    })

    this.list = newList

    return this.findById(id)
  }
}

const todo1Id = toDoList.create('go to market', ['buy ogbono', "branch at mgeso's house"])
const todo2Id = toDoList.create('go to market', ['buy ogbono', "branch at mgeso's house"])

const todo1 = toDoList.findById(todo1Id+2)
const todo2 = toDoList.findById(todo2Id)
const todos = toDoList.findAll()
// console.log(todo1Id, todo1?.id, todo2)
console.log(todos)
const updated = toDoList.updateById(todo2.id, 'new Kizito', ['NNNNNN to buy', 'bank to withdraw', 'some thing todo'])
console.log(updated)