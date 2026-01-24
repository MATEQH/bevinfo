function decToBin(dec) {
    var bin = "";

    while (dec > 0) {
        var maradek = dec % 2;

        bin = maradek + bin;

        dec = Math.trunc(dec / 2); // maradek !== 0 ? (dec - maradek) / 2 : dec / 2;
    }

    while (bin.length % 4 !== 0) {
        bin = "0" + bin;
    }

    return bin;
}

var dec = 46;
var bin = decToBin(dec);

console.log("Decimális szám: " + dec);
console.log("Bináris szám: " + bin);