const DataPoint = require('data-point')

// entities can be defined when creating a DataPoint instance,
// or later on with the addEntities function

const dataPoint = DataPoint.create({
  entities: {
    // 'model:foo': { /* spec goes here */ }
  }
})

// this just demonstrates the before, value, and after lifecycle methods
dataPoint.addEntities({
  'model:foo': {
    before: input => {
      console.log(`before (input: "${input}")`)
      return input + 'A'
    },

    value: input => {
      console.log(`value (input: "${input}")`)
      return input + 'B'
    },

    after: input => {
      console.log(`after (input: "${input}")`)
      return input + 'C'
    }
  }
})

const input = ''

dataPoint
  .resolve('model:foo', input)
  .then(output => console.log(`\noutput: "${output}"`))
