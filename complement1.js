function complement1(bin) {
    var complement1 = "";

    for (let i = 0; i < bin.length; i++) {
        complement1 += (bin[i] === "1" ? 0 : 1);
    }

    return complement1;
}

var bin = "10010001";
var comp1 = complement1(bin);

console.log("Bináris szám: " + bin);
console.log("1-es komplemens: " + comp1);