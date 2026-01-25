function rationalFracToBinFrac(x, y) {
    var binFrac = "";
    var maxFrac = 5;
    x *= 2.0;

    for (let i = 0; i < maxFrac; i++) {
        var egesz = Math.trunc(x / y);
        binFrac += egesz;

        x -= y * egesz;
        x *= 2.0;
    }

    return binFrac;
}

var x = 4;
var y = 15;
var binFrac = rationalFracToBinFrac(x, y);

console.log("Racionális tört: " + x + "/" + y);
console.log("Bináris tört: 0." + binFrac);