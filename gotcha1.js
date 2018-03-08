/* eslint no-unused-vars: 0 */

const DataPoint = require('data-point')

const reducer = input => input * 2

// the "reducer" entity type is very inefficient, so it's best not to use it
// in this case, "model:example2" will execute faster than "model:example1"

const dataPoint = DataPoint.create({
  'reducer:slowpoke': input => input * 2,

  'model:example1': {
    value: 'reducer:slowpoke'
  },

  'model:example2': {
    value: input => input * 2
  }
})

const input = 10

dataPoint
  .resolve('model:example', input)
  .then(console.log)
