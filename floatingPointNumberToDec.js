function floatingPointNumberToDec(sign, bin, binFrac) {
    var dec = 0;
    var hatvany = 1;

    for (let i = bin.length - 1; i > -1; i--) {
        dec += bin[i] * hatvany;
        hatvany *= 2;
    }

    var decFrac = 0;
    hatvany = 1 / 2;
    var maxFrac = 5;

    for (let i = 0; i < maxFrac; i++) {
        decFrac += binFrac[i] * hatvany;
        hatvany /= 2;
    }

    var karakterisztika = dec - 127;
    var mantissza = 1 + decFrac;

    var eredmeny = mantissza * Math.pow(2, karakterisztika);
    if (signBit === 1) {
        return -eredmeny;
    }

    return +eredmeny;
}

var signBit = 1;
var bin = "10000101";
var binFrac = "11110000000000000000000";
var dec = floatingPointNumberToDec(signBit, bin, binFrac);

console.log("Lebegőpontos szám: " + signBit + " " + bin + " " + binFrac);
console.log("Decimális szám: " + dec);

