// Írjon egy programot, amely egy decimális számot átalakít egy kettes komplemens kódban, 8 biten ábrázolt bináris számmá

function writeln(text) {
    console.log(text);
}

function decTo8bitBin(dec) {
    var bin = "";
    var ertek = 1;

    // osztások 2-vel
    while (ertek > 0) {
        ertek = Math.trunc(dec / 2);
        if (dec % 2 === 1) {
            bin = "1" + bin;
        } else {
            bin = "0" + bin;
        }
        dec = ertek;
    }

    // kiegészítés 8 bitre
    while (bin.length < 8) {
        bin = "0" + bin;
    }

    return bin;
}

function komplemens1(bin) {
    var komp1 = "";

    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === "1") {
            komp1 += "0";
        } else {
            komp1 += "1";
        }
    }

    return komp1;
}

function komplemens2(bin) {
    var komp2 = "";
    var i = bin.length - 1;
    var atvitel = 1;

    while(i >= 0) {
        if (bin[i] === "0" && atvitel === 0) {
            komp2 = "0" + komp2;
        } else if (bin[i] === "0" && atvitel === 1) {
            komp2 = "1" + komp2;
            atvitel = 0;
        } else if (bin[i] === "1" && atvitel === 0) {
            komp2 = "1" + komp2;
        } else {
            komp2 = "0" + komp2;
            atvitel = 1;
        }
        i--;
    }

    return komp2;
}

var dec = 124;
var bin = decTo8bitBin(dec);
var komp1 = komplemens1(bin);

writeln("Decimális szám: " + dec);
writeln("Bináris szám: " + bin);
writeln("1-es komplemens: " + komp1);
writeln("2-es komplemens: " + komplemens2(komp1));