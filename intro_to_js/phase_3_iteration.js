Array.prototype.bubbleSort = function () {
  let sorted = false;
  
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length; i++ ) {
      for(let j = 0; j < this.length; j++ ) {
        if (j > i && this[i] > this[j]) {
          let num = this[i];
          let adjNum = this[j];
          this[i] = adjNum;
          this[j] = num;
          sorted = false;
        }
      }
    }
  }
  
  return this;
}

// console.log([5,4,3,2,1].bubbleSort());

String.prototype.substrings = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      let subStr = this.slice(i, j + 1);
      if (subStr !== "" && result.includes(subStr) === false) {  
        result.push(subStr);
      }
    }
  }
  return result;
}

console.log("hello".substrings());