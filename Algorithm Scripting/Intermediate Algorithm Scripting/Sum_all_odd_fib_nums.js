// Return the sum of all odd Fibonacci numbers up to and including the passed number
// if it is a Fibonacci number.
//
// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each
// subsequent number is the sum of the previous two numbers.
//
// As an example, passing 4 to the function should return 5 because all the odd
// Fibonacci numbers under 4 are 1, 1, and 3.
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
  // while num is eq or greater than cur number then do the if statement.
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
          // ^ check for being even
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

sumFibs(4);
