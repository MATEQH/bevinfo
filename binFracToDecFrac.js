function binFracToDec(binFrac) {
    var decFrac = 0;
    var hatvany = 1 / 2;
    var maxFrac = 15;

    for (let i = 2; i < maxFrac; i++) {
        decFrac += binFrac[i] * hatvany;
        hatvany /= 2;
    }

    return decFrac;
}

var binFrac = "0.0110010111000110";
var decFrac = binFracToDec(binFrac);

console.log("Bináris tört: " + binFrac);
console.log("Decimális tört: " + decFrac);