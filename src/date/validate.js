const REGEXP_NUMBERS_STRING = /[0-9]{2}\s[0-9]{2}\s[0-9]{4}/;

exports.isValidString = function(dateStr) {
  return REGEXP_NUMBERS_STRING.test(dateStr);
}

exports.isYearValid = function(year) {
  return isGreaterThanAndEqualTo(year, 1900)
    && isLessThanAndEqualTo(year, 2010);
}

exports.isMonthValid = function(month) {
  return isGreaterThanAndEqualTo(month, 1)
    && isLessThanAndEqualTo(month, 12);
}

exports.isDateValid = function(year, month, date) {
  const isYearValid = exports.isYearValid(year);
  const isMonthValid = exports.isMonthValid(month);

  const lastDateBoundary = new Date(year, month, 0).getDate();

  const isDateValid = isGreaterThanAndEqualTo(date, 1)
    && isLessThanAndEqualTo(date, lastDateBoundary);

  return isYearValid && isMonthValid && isDateValid;
}

function isGreaterThanAndEqualTo(number, boundary) {
  return number >= boundary;
}

function isLessThanAndEqualTo(number, boundary) {
  return number <= boundary;
}
