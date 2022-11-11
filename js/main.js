"use strict";
let numeroDiPartenza = 1, numeroFinale = 10_000, risultatoParole = "";
let paroleEDivisori = {
    Fizz: 3,
    Buzz: 5,
}

for (let i = numeroDiPartenza; i < numeroFinale + 1; i++) {
    risultatoParole = "";
    for (let word of Object.keys(paroleEDivisori)) {
        if (i % paroleEDivisori[word] == 0) {
            risultatoParole += word
        }
    }
    console.log(risultatoParole.length == 0 ? i : risultatoParole)
}