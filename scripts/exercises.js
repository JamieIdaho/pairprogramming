//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

function forEach(list, eachCallback) {

   for (i=0; i<list.length; i++) {
    eachCallback(list[i]);
    }

}


// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.


//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [B] Drives, Person [A] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////


function map(arr, mapCallback) {
  var array2 = [];

  forEach(arr, function(x) {
    array2.push(mapCallback(x));
  });

  return array2;
};


function reduce(arr, reduceCallback) {

  var sum = 0;
  forEach(arr, function(y) {
    sum = sum + y;
  })
  return sum;
};


function filter(arr, filterCallback) {

  var array3 = [];

  forEach(arr, function(x) {
    if (x !== null && x !== undefined && x !== NaN && (typeof x) !== "string") {
      array3.push(filterCallback(x));
    }

  })

  return array3;

}




// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) {
  propertyArray = [];

  forEach(list, function(x){
    propertyArray.push(x.name);
  })
  return propertyArray;
}

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate){
  var answer = undefined;

  for (i=0; i < list.length; i++) {
    if (list[i] % 2 == 0) {
      answer = list[i];
      break
    }
  }
    return answer;
};

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2
