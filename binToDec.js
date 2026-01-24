function binToDec(bin) {
    var dec = 0;
    var hatvany = 1;

    for (let i = bin.length - 1; i > -1; i--) {
        dec += bin[i] * hatvany;
        hatvany *= 2;
    }

    return dec;
}

var bin = "10001011";
var dec = binToDec(bin);

console.log("Bináris szám: " + bin);
console.log("Decimális szám: " + dec);