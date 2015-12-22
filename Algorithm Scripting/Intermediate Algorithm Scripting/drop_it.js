// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.
function drop(arr, func) {
  // Drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
