// Compare two arrays and return a new array with any items only found in one of the original arrays.

function diff(arr1, arr2) {
  //adding the concat for concatenating two arrays
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
