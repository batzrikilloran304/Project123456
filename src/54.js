function fibonacci(n) {
    if (n <= 0) return [];
    else if (n === 1 || n === 2) return [0, 1];

    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacci(10));
