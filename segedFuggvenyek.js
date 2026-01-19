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