// Írjon egy programot, amely átalakít egy 2-es komplemens kódban, 8 biten ábrázolt bináris számot decimális számmá

function writeln(text) {
    console.log(text);
}

function binToDec(bin) {
    var dec = 0;
    var helyiertek = 128;

    for (let i = 0; i < bin.length; i++) {
        dec += helyiertek * bin[i];
        helyiertek /= 2;
    }

    return dec;
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

var bin = "11101001";
var komp1 = komplemens1(bin);
var komp2 = komplemens2(komp1);

writeln("Bináris szám: " + bin);
writeln("1-es komplemens: " + komp1);
writeln("2-es komplemens: " + komp2);
writeln("Decimális szám: " + binToDec(komp2));