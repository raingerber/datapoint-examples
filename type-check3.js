const DataPoint = require('data-point')

const dataPoint = DataPoint.create()

dataPoint.addEntities({
  'model:foo': {
    inputType: [
      'string',
      input => {
        if (!input.startsWith('c')) {
          throw new Error()
        }
      }
    ],

    value: input => input,

    error: (e, context) => 'DEFAULT STRING'
  }
})

const input = 'cow'

dataPoint
  .resolve('model:foo', input)
  .then(console.log)
