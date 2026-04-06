let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
function isPalindrome(num) {
    let original = num;
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return original === rev;
}
let answer = -1;
for (let X = 0; X <= 100000; X++) {
    let val = N + X;
    if (val % K === 0 && isPalindrome(val)) {
        answer = X;
        break;
    }
}
alert(answer);