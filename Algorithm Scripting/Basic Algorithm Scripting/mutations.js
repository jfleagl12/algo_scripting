// Return true if the string in the first element of the array contains all of the
// letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in
// the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello"
// does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in
// "line" are present in "Alien".
function mutation(arr) {
  // needed to create the two arrays for the 2 strings
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');
  var temp = 0;
  for (var s = 0; s < second.length; s++) {
    if (first.indexOf(second[s]) > -1) {
      temp += 0;
    } else
      temp += 1;
  }

  if (temp === 0)
    return true;
  else
    return false;
}
mutation(["hello", "hey"]);
