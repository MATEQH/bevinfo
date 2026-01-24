function complement2(bin) {
    var complement1 = "";

    for (let i = 0; i < bin.length; i++) {
        complement1 += (bin[i] === "1" ? 0 : 1);
    }

    var complement2 = "";
    var maradek = 1;

    for (let i = complement1.length - 1; i > -1; i--) {
        var bit = complement1[i];

        if (maradek === 1) {
            complement2 = (bit === "1" ? "0" : "1") + complement2;
            if (bit === "0") maradek = 0;
        } else {
            complement2 = bit + complement2;
        }
    }

    return complement2;
}

var bin = "10010000";
var comp2 = complement2(bin);

console.log("Bináris szám: " + bin);
console.log("2-es komplemens: " + comp2);