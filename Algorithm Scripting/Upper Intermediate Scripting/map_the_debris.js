// Return a new array that transforms the element's average altitude into their orbital periods.
//
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//
// You can read about orbital periods on wikipedia.
//
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
//
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  //separated out the pieces of the equation into a,b,c
  var a = 2 * Math.PI;
  // create new array for storing info
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// Data input below
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
