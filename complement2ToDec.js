function complement2ToDec(bin) {
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

    var dec = 0;
    var hatvany = 1;

    for (let i = complement2.length - 1; i > -1; i--) {
        dec += complement2[i] * hatvany;
        hatvany *= 2;
    }

    if (bin[0] === "1") dec = -dec;

    return dec;
}

var bin = "11011010";
var dec = complement2ToDec(bin);

console.log(dec);