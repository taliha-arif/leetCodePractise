function minswaps(arr) {
  let count = 0,
    unOrderZero = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      unOrderZero++;
    } else {
      count += unOrderZero;
    }
  }
  return count;
}
var arr = [0, 0, 1, 0, 1, 0, 1, 1];
console.log(minswaps(arr));
