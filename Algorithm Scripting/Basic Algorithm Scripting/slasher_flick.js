// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head meaning the beginning of the array, or the zeroth index
function slasher(arr, howMany) {
  //Return string after the amount chopped off.
  return arr.slice(howMany);

}

slasher([1, 2, 3], 2);
