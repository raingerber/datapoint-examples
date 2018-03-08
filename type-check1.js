const DataPoint = require('data-point')

const dataPoint = DataPoint.create()

// built-in types for inputType and outputType:

// 'string'
// 'number'
// 'boolean'
// 'function'
// 'error'
// 'array'
// 'object'

dataPoint.addEntities({
  'model:foo': {
    inputType: 'string',

    value: input => 'this is a string',

    // the return value from the error handler is still type checked by outputType (when it's defined)
    error: (e, context) => {
      // this will return "DEFAULT STRING",
      // which is defined in the params object below
      return context.params.default
    },

    outputType: 'string',

    params: {
      default: 'DEFAULT STRING'
    }
  }
})

// using this input will cause an error in the "model:foo" inputType check
const input = 12312

dataPoint
  .resolve('model:foo', input)
  .then(console.log)
