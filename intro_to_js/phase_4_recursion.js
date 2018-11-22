function range(start, end) {
  if (start === end) {
    return [end];
  }
  
  let result = range(start + 1, end);
  result.unshift(start);
  return result;
}

// console.log(range(1, 5) instanceof Array);
// console.log(range(1, 5));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let result = sumRec(arr.slice(1, arr.length));
  result += arr[0];
  return result;
}

console.log(sumRec([1,2,3]));