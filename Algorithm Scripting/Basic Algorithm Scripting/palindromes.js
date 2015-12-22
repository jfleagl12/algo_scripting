// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and
// backward, ignoring punctuation, case, and spacing.
//
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything lower case in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and
// "race CAR" among others.
function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
}

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}



palindrome("eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega my.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
