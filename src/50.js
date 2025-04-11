function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;

  for (let i = 2; i < n; i++) {
    [first, second] = [second, first + second];
  }

  return second;
}

console.log(fibonacci(10)); // Output: 55
