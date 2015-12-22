// Create a function that looks through an array (first argument) and returns the
// first element in the array that passes a truth test (second argument).
function find(arr, func) {
  filterArr = arr.filter(func); //filter array with the function provided

  return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
