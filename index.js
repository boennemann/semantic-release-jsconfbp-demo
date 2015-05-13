module.exports = function () {
  return Array.prototype.slice.call(arguments)

  .reduce(function (prev, current) {
    return prev + current
  })
}
