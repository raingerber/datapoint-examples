const DataPoint = require('data-point')

// logs the input and context to show what the context object looks like

const dataPoint = DataPoint.create({
  entities: {
    'model:foo': {
      value: reducer
    }
  }
})

// reducer functions accept at most TWO parameters:
function reducer (input, context) {
  console.log('INPUT:')
  console.log(input)
  console.log('\nCONTEXT:')
  console.log(JSON.stringify(context, null, 2))
}

const input = 'this is the input'

dataPoint.resolve(
  'model:foo',
  input
)
