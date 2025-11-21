function mergeSort(arr) {
  if (!arr.length){
    return [];

  } else if(arr.length == 1) {
    return arr;

  } else if(arr.length == 2) {
    return arr[0] < arr[1] ? arr : arr.reverse();

  } else {
    const mid = Math.ceil(arr.length / 2);
    const half = mergeSort(arr.slice(0, mid));
    const last = mergeSort(arr.slice(mid));
    let newArray = [];

    while (half.length > 0 || last.length > 0) {
      if (half.length > 0 && last.length > 0) {
        if (half[0] < last[0]) {
          newArray.push(half.shift());
        } else {
          newArray.push(last.shift());
        }
      } else if (half.length > 0) {
        newArray.push(half.shift());
      } else {
        newArray.push(last.shift());
      }
    }
    return newArray;
  }
}

// tests
console.log(mergeSort([])); // → []
console.log(mergeSort([73])); // → [73]
console.log(mergeSort([1, 2, 3, 4, 5])); // → [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // → [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // → [79, 100, 105, 110]