const DataPoint = require('data-point')

const dataPoint = DataPoint.create()

dataPoint.addEntities({
  'model:foo': {
    // custom type check reducer
    // this could also be defined in a slightly simpler way as demonstrated in type-check3.js
    // specifically, the typeof input === 'string' check can be done using the built-in "string" type checker
    inputType: input => {
      if (typeof input === 'string' && input.startsWith('c')) {
        return
      }

      throw new Error()
    },

    value: input => input,

    error: (e, context) => 'DEFAULT STRING'
  }
})

const input = 'pow'

dataPoint
  .resolve('model:foo', input)
  .then(console.log)
