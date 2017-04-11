const validate = require('./validate');

exports.getDaysDifference = function(datesString) {
  const datesArray = exports.getDatesFromCombinedString(datesString);
  const hasValidDates = datesArray.length === 2
    && datesArray.every(dt => dt);

  if (hasValidDates) {
    const [ first, second ] = datesArray;
    const difference = exports.getDifference(second, first);
    return exports.getDaysDescription(difference);
  }
}

exports.getDaysDescription = function(difference) {
  if (0 === difference) {
    return 'No difference';
  }
  if (1 === difference) {
    return `${difference} day`;
  }
  return `${difference} days`;
}

exports.getDifference = function(first, second) {
  let difference = exports.millisecondsToDays(second - first);
  if (difference < 0) {
    difference = difference * -1;
  }
  return difference;
}

exports.millisecondsToDays = function(milliseconds) {
  return milliseconds / 1000 / 60 / 60 / 24;
}

exports.getDatesFromCombinedString = function(datesString) {
  return datesString.split(',')
    .map(str => str.trim())
    .map(exports.getDateFromDateString);
}

exports.getDateFromDateString = function(dateString) {
  const isValidString = validate.isValidString(dateString);
  if (isValidString) {
    return parseNumbersArray(dateString);
  }
}

exports.getNumbersFromString = function(dateString) {
  return dateString.split(' ')
    .map(numberStr => parseInt(numberStr, 10));
}

function parseNumbersArray(dateString) {
  const numbersArray = exports.getNumbersFromString(dateString);
  const [ date, month, year ] = numbersArray;
  const isValid = validate.isDateValid(year, month, date);
  if (isValid) {
    return Date.UTC(year, (month - 1), date, 0, 0, 0, 0);
  }
}
