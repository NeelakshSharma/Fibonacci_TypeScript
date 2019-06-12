var num = 11;
console.log(isFibonacci(num));
function isFibonacci(num2) {
    return isPerfectSquare(5 * num2 * num2 + 4);
}
function isPerfectSquare(num1) {
    var s = Math.sqrt(num1);
    return num1 == Math.floor(s * s);
}
