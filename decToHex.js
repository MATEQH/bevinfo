function decToHex(dec) {
    var hex = "";
    var digits = "0123456789ABCDEF";

    while (dec > 0) {
        var maradek = dec % 16;
        var digit = digits[maradek];

        hex = digit + hex;

        dec = Math.trunc(dec / 16); // maradek !== 0 ? (dec - maradek) / 16 : dec / 16;
    }

    return hex;
}

var dec = 139;
var hex = decToHex(dec);

console.log("Decimális szám: " + dec);
console.log("Hexadecimális szám: " + hex);