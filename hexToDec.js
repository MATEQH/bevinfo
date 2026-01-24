function hexToDec(hex) {
    var dec = 0;
    var digits = "0123456789ABCDEFabcdef";
    var hatvany = 1;

    for (let i = hex.length - 1; i > -1; i--) {
        var index = digits.indexOf(hex[i]);
        if (index > 15) index -= 6;

        dec += index * hatvany;
        hatvany *= 16;
    }

    return dec;
}

var hex = "1cf6e";
var dec = hexToDec(hex);

console.log("Hexadecimális szám: " + hex);
console.log("Decimális szám: " + dec);