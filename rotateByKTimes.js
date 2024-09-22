let teset = [1, 2, 3, 4, 5, 6, 7];

// Solution 1

function rotateByKtimes(rotate) {
  for (let i = 0; i < rotate; i++) {
    const value = teset.pop();
    teset.unshift(value);
  }
  return teset;
}

console.log(rotateByKtimes(8));

// Solution 2 : More Efficent

let teset1 = [1, 2, 3, 4, 5, 6, 7];
function rotateByKTimesEfficientSol(k) {
  const n = teset1.length;
  k = k % n; // Handle cases where k > n

  // Use slicing instead of shifting
  return [...teset1.slice(-k), ...teset1.slice(0, n - k)];
}

console.log(rotateByKTimesEfficientSol(8));

