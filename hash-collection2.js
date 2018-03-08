/* eslint no-unused-vars: 0 */

const DataPoint = require('data-point')

const {
  assign,
  map,
  filter,
  find,
  constant,
  parallel,
  withDefault
} = require('data-point').helpers

const dataPoint = DataPoint.create()

const square = input => input ** 2

const isLessThanFive = input => input < 5

dataPoint.addEntities({
  // this is the same as the entity defined in hash-collection1.js, but
  // the syntax is a little bit simpler than using the compose property
  'collection:foo': {
    value: [
      map(square),
      filter(isLessThanFive)
    ]
  }
})

const input = [1, 2, 3]

dataPoint
  .resolve('collection:foo', input)
  .then(console.log)
