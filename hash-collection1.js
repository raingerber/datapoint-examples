/* eslint no-unused-vars: 0 */

const DataPoint = require('data-point')

const dataPoint = DataPoint.create()

const square = input => input ** 2

const isLessThanFive = input => input < 5

dataPoint.addEntities({
  // this entity is the same as the "collection:foo" entity in hash-collection2.js
  // but that uses the "map" amd "filter" reducer helpers instead of the "compose"
  // property for both hash and collection entities, the functionality offered by
  // compose is also available through the reducer helpers
  'collection:foo': {
    value: input => input,
    compose: [
      {
        map: square
      },
      {
        filter: isLessThanFive
      }
    ]
  }
})

const input = [1, 2, 3]

dataPoint
  .resolve('collection:foo', input)
  .then(console.log)
