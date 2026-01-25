function decFracToBinFrac(decFrac) {
    var binFrac = "";
    var maxFrac = 5;
    decFrac *= 2;

    for (let i = 0; i < maxFrac; i++) {
        var egesz = Math.trunc(decFrac);
        binFrac += egesz;
        var tort = decFrac - egesz;
        decFrac = tort * 2;
    }

    return binFrac;
}

var decFrac = 0.345;
var binFrac = decFracToBinFrac(decFrac);

console.log("Decimális tört: " + decFrac);
console.log("Bináris tört: 0." + binFrac);