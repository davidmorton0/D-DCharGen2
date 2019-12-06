function psionPowerPoints(level,score){
  let points = [2,6,11,17,25,35,46,58,72,88,106,126,147,170,195,221,250,280,311,343]
  if (level < 1 || score < 11) {
    return 0;
  }
  return points[Math.min(level - 1, 19)] +
    Math.floor((level / 2) * Math.floor(score / 2 - 5));
}

//Tests
var assert = require('assert');
assert.equal(psionPowerPoints(1,0), 0)
assert.equal(psionPowerPoints(1,10), 0)
assert.equal(psionPowerPoints(1,11), 2)
assert.equal(psionPowerPoints(0,11), 0)
assert.equal(psionPowerPoints(1,20), 4)
assert.equal(psionPowerPoints(21,30), 448)
