const DataPoint = require('data-point')

const { withDefault } = DataPoint.helpers

const dataPoint = DataPoint.create()

function getSecondWord (str, _default) {
  if (typeof str === 'string') {
    return str.split(/\s+/)[1]
  }
}

const input = 'onetwothree'

dataPoint.resolve(
  // this adds a default value to the getSecondWord reducer
  withDefault(getSecondWord, 'default-word'),
  input
).then(console.log)
