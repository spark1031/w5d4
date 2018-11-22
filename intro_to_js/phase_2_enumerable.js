function callback1(el) {
  return el * el;
};
// Array.prototype.myEach = function (callback) {
//   let result = [];
// 
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i]));
//   }
//   return result;
// };

//callbackEach is this function: (element) => result.push(callbackMap(element));
Array.prototype.myEach = function (callbackEach) {
  for (let i = 0; i < this.length; i++) {
      callbackEach(this[i]);
  }
};

// [1, 2, 3].myEach(callback1);


Array.prototype.myMap = function (callbackMap) {
  const result = [];
  this.myEach( (element) => result.push(callbackMap(element)) );
  
  return result;
};

// let arr = [1, 2, 3].myMap(callback1);
// console.log(arr);

Array.prototype.myReduce = function (callback, initialValue) {
  if (initialValue === undefined) {
    initialValue = this[0];
    for (let i = 1; i < this.length; i++) {
      initialValue = callback(initialValue, this[i]);
    }
  } else {
    this.myEach( (element) => initialValue = callback(initialValue, element) );
  }
  
  return initialValue;
};

let arr = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25);

console.log(arr);