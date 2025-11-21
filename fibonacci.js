function fibs(num) {
  const arr = [];
  for(let i = 0; i < num; i++){
    let sum = i;
    if(arr.length > 1){
      sum = arr[i-1] + arr[i-2];
    }
    arr.push(sum);
  }
  return arr;
}

function fibsRec(num) {
  if(num == 1) return [0];

  if(num > 1) {
    const arr = fibsRec(num - 1);
    const last = arr.at(-1);
    const second = arr.length > 1 ? arr.at(-2) : 1; // 2 = [0,1]

    arr.push(last + second);
    return arr;
  }
}
console.log('fibs', fibs(8));
console.log('fibsRec', fibsRec(8));


console.log('fibsRec', fibsRec(12));
