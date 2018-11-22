Array.prototype.myUniq = function () {
  let newArr = [];
  
  for (let i = 0; i < this.length; i++) {
    if (newArr.includes(this[i])) {
      continue;
    } else {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

// let uniqArr = [1,2,3,1].myUniq();
// console.log(uniqArr);

Array.prototype.myTwoSum = function () {
  let result = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 1; j < this.length; j++) {
      if (j > i && this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

Array.prototype.myTranspose = function () {
  let result = [];
  
  for (let i = 0; i < this.length; i++) {
    result.push([]);
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      result[j].push(this[i][j]);
    }
  }
  
  return result;
}

let transposedArr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]].myTranspose();
console.log(transposedArr);

