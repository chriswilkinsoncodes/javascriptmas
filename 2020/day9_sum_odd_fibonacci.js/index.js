function sumOddFibonacciNumbers(num) {
    let a = 1
    let b = 1
    let t = 0
    let result = 2
    while ( a+b < num) {
        t = b
        b = a + b
        a = t
        if (b % 2) {
            result += b
        }
    }
    return result
}

console.log(sumOddFibonacciNumbers(10));
console.log(sumOddFibonacciNumbers(1000));
console.log(sumOddFibonacciNumbers(4000000));