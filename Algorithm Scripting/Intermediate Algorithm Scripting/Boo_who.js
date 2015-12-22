// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.

function boo(bool) {
  // if yes then return true, if it is another type then return false
  return typeof bool === 'boolean';
}

boo(true);
