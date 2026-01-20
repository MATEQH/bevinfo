// Decimális szám átváltása hexadecimális számmá
function decimalisToHexadecimalis(decimalisSzam) {
    var hex = "";
    var digits = "0123456789ABCDEF";

    while (decimalisSzam > 0) {
        var maradek = decimalisSzam % 16;
        hex = digits[maradek] + hex;
        decimalisSzam = Math.trunc(decimalisSzam / 16);
    }

    return hex;
}

// Hexadecimális szám átváltása decimális számmá
function hexadecmialisToDecimalis(hexadecimalisSzam) {
    var dec = 0;
    var digits = "0123456789ABCDEFabcdef";

    for (let i = 0; i < hexadecimalisSzam.length; i++) {
        var index = digits.indexOf(hexadecimalisSzam[i]);
        if (index > 15) index -= 6;
        dec += index * Math.pow(16, hexadecimalisSzam.length - i - 1);
    }

    return dec;
}

console.log(hexToDec("FF59A"));
console.log(decToHex(1045914));


// 50 | 0
// 25 | 1
// 12 | 0
// 6 | 0
// 3 | 1
// 1 | 1
// 0 - itt áll le a while ciklusunk
// Decimális szám átváltása bináris számmá
function decimalisToBinaris(decimalisSzam) {
    var binarisSzam = "";

    while (decimalisSzam > 0) {
        var maradek = decimalisSzam % 2; // pl: 3 % 2 = 1 - maradék
        if (maradek === 1) {
            binarisSzam = "1" + binarisSzam;
        } else {
            binarisSzam = "0" + binarisSzam;
        }
        decimalisSzam = Math.trunc(decimalisSzam / 2); // pl: 50 / 2 = 25
    }

    // kiegeszítés 8 bitre
    while (binarisSzam.length < 8) {
        binarisSzam = "0" + binarisSzam;
    }

    return binarisSzam;
}

// Bináris szám átváltása decimális számmá
function binarisToDecimalis(binarisSzam) {
    var decimalisSzam = 0;

    for (let i = 0; i < binarisSzam.length; i++) {
        decimalisSzam += Math.pow(2, binarisSzam.length - i - 1) * binarisSzam[i];
    }

    return decimalisSzam;
}

// 1-es komplemens ábrázolása (negálás)
function komplemens1(binarisSzam) {
    var komplemens1 = "";

    for (let i = 0; i < binarisSzam.length; i++) {
        var bit = binarisSzam[i];
        if (bit === "1") {
            komplemens1 = komplemens1 + "0";
        } else {
            komplemens1 = komplemens1 + "1";
        }
    }

    return komplemens1;
}

// 2-es komplemens ábrázolása (+1 hozzáadása a bináris számhoz)
function komplemens2(binarisSzam) {
    var komplemens2 = "";
    var maradek = 1;

    for (let i = binarisSzam.length - 1; i > -1; i--) {
        var bit = binarisSzam[i];
        if (bit === "0" && maradek === 1) {
            komplemens2 = "1" + komplemens2;
            maradek = 0;
        } else if (bit === "1" && maradek === 1) {
            komplemens2 = "0" + komplemens2;
        } else {
            komplemens2 = bit + komplemens2;
        }
    }

    return komplemens2;
}