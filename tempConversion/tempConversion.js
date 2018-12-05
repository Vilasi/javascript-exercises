function ftoc(x) {
let num;

num = (x - 32) * (5/9);

if (num % 1 === 0) {
  num = num.toFixed(0);
  num = Number(num);
  return num;
} else {
  num = num.toFixed(1);
  num = Number(num);
  return num;
}
}

function ctof(x) {
let num;

num = (x * (9/5)) + 32;

// If remainder is 0, no decmials are required. Else, round to 1 decimal place.
if (num % 1 === 0) {
  num = num.toFixed(0);
  num = Number(num);
  return num;
} else {
  num = num.toFixed(1);
  num = Number(num);
  return num;
}
}

module.exports = {
  ftoc,
  ctof
}

module.exports = {
  ftoc,
  ctof
}
