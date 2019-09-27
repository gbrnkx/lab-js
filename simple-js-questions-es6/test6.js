// 1. Create a function called duplicate
// that given an array input, it will return a new duplicate array

duplicate=(arr)=>{
  return arr.concat(arr)
}

duplicate([1, 2, 3]);
// Returns ==>  [1, 2, 3, 1, 2, 3]


