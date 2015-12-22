// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.

function sumAll(arr) {
  //need to use max and min for the two values
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
  //this is the general structure for two values in an array
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);
