var test = require('tape')

var sum = require('../')

test('basics', function (t) {
  t.plan(3)

  t.throws(sum.bind(null, 1))
  t.is(sum(1, 4), 5)
  t.is(sum(1, '4'), 5)
})
