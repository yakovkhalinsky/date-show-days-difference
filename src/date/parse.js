const ZERO_FUNCTIONS = [
  'setHours',
  'setMinutes',
  'setSeconds',
  'setMilliseconds'
];

exports.getNumbersFromString = function(dateString) {
  return dateString.split(' ')
    .map(numberStr => parseInt(numberStr, 10));
}

exports.zeroDate = function(date) {
  ZERO_FUNCTIONS.forEach(fn => date[fn](0));
}
