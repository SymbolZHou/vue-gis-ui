import tinycolor from 'tinycolor2'

function isOnePointZero(n) {
  return typeof n == 'string' && n.indexOf('.') != -1 && parseFloat(n) === 1
}
function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') != -1
}
function bound01(n, max) {
  if (isOnePointZero(n)) n = '100%'
  var processPercent = isPercentage(n)
  n = Math.min(max, Math.max(0, parseFloat(n)))

  // Automatically convert percentage into number
  if (processPercent) {
    n = parseInt(n * max, 10) / 100
  }

  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1
  }

  // Convert into [0, 1] range if it isn't already
  return (n % max) / parseFloat(max)
}

tinycolor.prototype.from01 = function () {
  return {
    r: bound01(this._r, 255),
    g: bound01(this._g, 255),
    b: bound01(this._b, 255),
    a: this._a
  }
}

tinycolor.bound01 = bound01
