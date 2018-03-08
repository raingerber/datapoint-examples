/* eslint no-unused-vars: 0 */

const DataPoint = require('data-point')

const dataPoint = DataPoint.create()

function customReducer (input) {
  // custom type checking logic goes here
}

// outputType is implicit for hash and collection entities
// this applies even when custom reducers are used

dataPoint.addEntities({
  'hash:foo': {
    value: () => {
      return {}
    }

    // this is implicit
    // outputType: 'object'
  },

  'collection:foo': {
    value: () => {
      return []
    }

    // this is implicit
    // outputType: 'array'

    // these two lines are equivalent, because adding a custom reducer does not override the default type check
    // outputType: customReducer
    // outputType: ['object', customReducer]
  }
})

const input = ''

dataPoint
  .resolve('model:foo', input)
  .then(console.log)
