// Remove all falsy values from an array.
//
// Falsy values in javascript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  // callback function for filter method
  function noFalsy(value) {
  // Retreive primitive Boolean value based on the element in array currently being tested via filter method
  // This primitive Boolean value equates to false if the value being added is omitted or is 0, -0, null, false, NaN, undefined, or ""
  var x = new Boolean(value);
  if (x == false)
//returning false to the filter method removes the element from the array
    return false;
  //returning true to the filter method keeps the element in the array
  else
    return true;
  }
  //return the array after modifying it with the filter method
  return arr.filter(noFalsy);
}
bouncer([7, "ate", "", false, 9]);
