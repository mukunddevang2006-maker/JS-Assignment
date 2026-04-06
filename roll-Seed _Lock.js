let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;
for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}
let result = "NO";

if (current >= 100 && current <= 999) {
    let middle = Math.floor(current / 10) % 10;
    if (middle === seed) {
        result = "YES";
    }
}
alert(result + ", " + current);