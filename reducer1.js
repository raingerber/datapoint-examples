/* eslint no-unused-vars: 0 */

const chalk = require('chalk')
const Promise = require('bluebird')
const dataPoint = require('data-point').create()

const {
  assign,
  map,
  filter,
  find,
  constant,
  parallel,
  withDefault
} = require('data-point').helpers

const input = {
  a: {
    b: 'FOO'
  }
}

// FUNCTION REDUCER
//  - can have from 0 - 2 parameters
const _function = (input, context) => {
  return `${input.a.b} has been transformed!`
}

// PATH REDUCER
//  - uses _.get internally, but requires the $ prefix
const _path = '$a.b'

// List reducer
//  - each element is a reducer
//  - output from each reducer becomes the input to the next reducer (piping)
const _list = ['$a.b', input => `${input} has been transformed!`]

// OBJECT REDUCER
//  - each value is a reducer
//  - each reducer gets the same input, regardless of nesting
const _object = {
  x: {
    y: {
      c1: constant('this is a constant'),
      c2: constant({ a: 1 }), // this is NOT cloned
      z: '$a.b'
    }
  },
  y: '$a.b'
}

// Entity reducer
const _entity = 'model:entity-name'

const log = type => output => {
  const header = chalk.yellow(`${type} reducer:`)
  console.log(`${header}\n ${JSON.stringify(output, null, 2)}\n`)
}

Promise.all([
  dataPoint.resolve(_function, input).then(log('function')),
  dataPoint.resolve(_path, input).then(log('path')),
  dataPoint.resolve(_list, input).then(log('list')),
  dataPoint.resolve(_object, input).then(log('object'))
])
