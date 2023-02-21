// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

const sayHi = require('./5-utils')
const { john, peter } = require('./4-names')

const data = require('./6-alternative-flavor')

console.log(data)
require('./7-mind-grenade')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
