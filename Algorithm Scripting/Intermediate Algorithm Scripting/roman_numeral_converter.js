// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.

var convert = function(num) {

  // Create arrays with default conversion with matching indices.
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  //empty string variable for the final roman number

  var romanized = '';

  // Loop through the indices of the decimalValue array.
  for (var index = 0; index < decimalValue.length; index++) {
    // Continue to loop while the value at the current index will fit into numCopy
    while (decimalValue[index] <= num) {
      // Add the Roman numeral & decrease numCopy by the decimal equivalent.
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

convert(36);
