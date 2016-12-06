describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });


  describe('knows when is NOT', function() {
    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });


  describe('knows when number is', function(){
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when number is NOT', function(){
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('fizzbuzz returns', function() {

    it('fizz when a number is divisible by 3', function() {
        expect(fizzbuzz.says(3)).toEqual("fizz");
    });
  });


  describe('fizzbuzz returns', function() {

    it('buzz when a number is divisible by 5', function() {
        expect(fizzbuzz.says(5)).toEqual("buzz");
    });
  });


  describe('fizzbuzz returns', function() {

    it('fizzbuzz when a number is divisible by 15', function() {
        expect(fizzbuzz.says(15)).toEqual("fizzbuzz");
    });
  });

  describe('fizzbuzz returns', function() {

    it('0 when passed 0', function() {
        expect(fizzbuzz.says(0)).toEqual(0);
    });
  });

  describe('fizzbuzz returns', function() {

    it('4 when passed 4', function() {
        expect(fizzbuzz.says(4)).toEqual(4);
    });
  });


});
