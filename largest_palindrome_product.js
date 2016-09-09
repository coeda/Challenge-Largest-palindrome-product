/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

    var testArray = [];
    var testNumber;
    for(let i = 0; i < digits; i++){
      testArray.push(9);
    }
    testNumber = parseInt(testArray.join(''));

    for(let j = testNumber; j >= 0; j--){
      for(let k = testNumber; k >= 0; k--){
        var palindromeTestNumber;
        var palindromeCheckReverse;
        var palindromeArray = [];
        palindromeTestNumber = j * k;
        palindromeCheckReverse = palindromeTestNumber.toString().split('').reverse().join('');
        if(palindromeTestNumber == palindromeCheckReverse){
          if(palindromeNumber < palindromeTestNumber){
          palindromeNumber = palindromeTestNumber;
          factor_0 = k;
          factor_1 = j;
          }
        }
      }
    }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};