const _ = require('lodash')
const DataPoint = require('data-point')

const { map } = DataPoint.helpers

// the reducer helpers can be inefficient when the operation does not need to be async
// in this case, "model:async" and "model:sync" return the same value, but the sync
// version is likely to execute faster

// async vs sync
const dataPoint = DataPoint.create({
  entities: {
    inputType: 'schema:a.1.0',

    // this will create a promise for each element of the input array,
    // which is not efficient because the operation can be done synchronously
    'model:async': {
      value: map('$a')
    },

    // this will execute faster than "model:async"
    'model:sync': {
      value: input => _.map(input, 'a')
    }
  }
})

const input = [{ a: 1 }, { a: 2 }, { a: 3 }]

const log = (type, output) => {
  console.log(`${type}: ${output}`)
}

Promise.all([
  dataPoint.resolve('model:async', input).then(output => log('async', output)),
  dataPoint.resolve('model:sync', input).then(output => log('sync', output))
])
