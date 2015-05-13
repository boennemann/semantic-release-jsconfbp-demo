module.exports = function () {
  if (arguments.length < 2) throw new Error('At least two arguments please!')

  return Array.prototype.slice.call(arguments)

  .reduce(function (prev, current) {
    return prev + Number(current)
  }, 0)
}
