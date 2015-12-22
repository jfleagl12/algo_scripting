// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');
  for (var i=0;allChars[allChars.length-1] !== str[str.length-1] ;i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0)+i);
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

fearNotLetter("abce");
