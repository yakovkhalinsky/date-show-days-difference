const parse = require('../parse');

describe('date parse', () => {

  describe('getNumbersFromString', () => {
    let numbersArray, dateString;

    describe('when given a string of format DD MM YYYY', () => {
      beforeEach(() => {
        dateString = '04 09 2000';
        numbersArray = parse.getNumbersFromString(dateString);
      });

      it('should return an array of numbers', () => {
        expect(numbersArray).toEqual([ 4, 9, 2000 ]);
      });
    });
  });

});
