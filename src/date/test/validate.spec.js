const validate = require('../validate');

describe('date validate', () => {

  describe('isYearValid', () => {

    describe('when year is 1900', () => {
      it('should return true', () => {
        expect(validate.isYearValid(1900)).toBe(true);
      });
    });

    describe('when year is 2010', () => {
      it('should return true', () => {
        expect(validate.isYearValid(2010)).toBe(true);
      });
    });

    describe('when year is 1950', () => {
      it('should return true', () => {
        expect(validate.isYearValid(1950)).toBe(true);
      });
    });

    describe('when year is 1899', () => {
      it('should return false', () => {
        expect(validate.isYearValid(1899)).toBe(false);
      });
    });

    describe('when year is 2011', () => {
      it('should return false', () => {
        expect(validate.isYearValid(2011)).toBe(false);
      });
    });

  });

  describe('isMonthValid', () => {

    describe('when month is 1', () => {
      it('should return true', () => {
        expect(validate.isMonthValid(1)).toBe(true);
      });
    });

    describe('when month is 12', () => {
      it('should return true', () => {
        expect(validate.isMonthValid(12)).toBe(true);
      });
    });

    describe('when month is 0', () => {
      it('should return false', () => {
        expect(validate.isMonthValid(0)).toBe(false);
      });
    });

    describe('when month is 13', () => {
      it('should return false', () => {
        expect(validate.isMonthValid(13)).toBe(false)
      });
    });

  });

  describe('isDateValid', () => {
    let year, month, date;

    describe('when year and month are valid', () => {
      beforeEach(() => {
        year = 2000;
        month = 10;
      });

      describe('and date value is 1', () => {
        beforeEach(() => {
          date = 1;
        });

        it('should return true', () => {
          expect(validate.isDateValid(year, month, date)).toBe(true);
        });
      });

      describe('and date value is 31', () => {
        beforeEach(() => {
          date = 31;
        });

        it('should return true', () => {
          expect(validate.isDateValid(year, month, date)).toBe(true);
        });
      });

      describe('and date value is 14', () => {
        beforeEach(() => {
          date = 14;
        });

        it('should return true', () => {
          expect(validate.isDateValid(year, month, date)).toBe(true);
        });
      });

      describe('and date value is 0', () => {
        beforeEach(() => {
          date = 0;
        });

        it('should return false', () => {
          expect(validate.isDateValid(year, month, date)).toBe(false);
        });
      });

      describe('and date value is 32', () => {
        beforeEach(() => {
          date = 32;
        });

        it('should return false', () => {
          expect(validate.isDateValid(year, month, date)).toBe(false);
        });
      });
    });

    describe('when year is valid and month is invalid', () => {
      beforeEach(() => {
        year = 2000;
        month = 20;
        date = 10;
      });

      it('should return false', () => {
        expect(validate.isDateValid(year, month , date)).toBe(false);
      });
    });

    describe('when year is invalid and month is invalid', () => {
      beforeEach(() => {
        year = 3000;
        month = 10;
        date = 10;
      });

      it('should return false', () => {
        expect(validate.isDateValid(year, month , date)).toBe(false);
      });
    });
  });

});
