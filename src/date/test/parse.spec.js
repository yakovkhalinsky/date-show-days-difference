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

  describe('zeroDate', () => {

    describe('when given a date object', () => {
      let dt;

      beforeEach(() => {
        dt = new Date();
        parse.zeroDate(dt);
      });

      it('should zero out the hours', () => {
        expect(dt.getHours()).toBe(0);
      });

      it('should zero out the minutes', () => {
        expect(dt.getMinutes()).toBe(0);
      });

      it('should zero out the seconds', () => {
        expect(dt.getSeconds()).toBe(0);
      });

      it('should zero out the milliseconds', () => {
        expect(dt.getMilliseconds()).toBe(0);
      });
    });
  });

});
