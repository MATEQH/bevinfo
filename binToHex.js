function decToHex(index) {
    var digits = "0123456789ABCDEF";

    return digits[index];
}

var bin = "100110101011";

while (bin.length % 4 !== 0) {
    bin = "0" + bin;
}

var hatvany = 8;
var eredmeny = 0;
var hex = "";

for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") eredmeny += hatvany;

    if (hatvany < 2) {
        hex += decToHex(eredmeny);
        hatvany = 8;
        eredmeny = 0;
    } else {
        hatvany /= 2;
    }
}

console.log("Bináris szám: " + bin);
console.log("Hexadecimális szám: " + hex);