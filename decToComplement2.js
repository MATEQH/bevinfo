function decToComplement2(dec) {
    var bin = "";

    var maradek;

    while (dec > 0) {
        maradek = dec % 2;

        bin = maradek + bin;

        dec = Math.trunc(dec / 2); // maradek !== 0 ? (dec - maradek) / 2 : dec / 2;
    }

    while (bin.length < 8) {
        bin = "0" + bin;
    }

    var complement1 = "";

    for (let i = 0; i < bin.length; i++) {
        complement1 += (bin[i] === "1" ? 0 : 1);
    }

    var complement2 = "";
    maradek = 1;

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

var dec = 99;
var complement2 = decToComplement2(dec);

console.log(complement2);