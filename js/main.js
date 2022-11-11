import {
    ensureFloatFromPrompt,
    ensureIntFromPrompt
} from "./ensureNumber.js";
"use strict";
console.log(ensureFloatFromPrompt)

let numeroDiPartenza,
    numeroFinale,
    risultatoParole = "";

let paroleEDivisori = {};
paroleEDivisori[prompt("Metti la prima parola: ")] = ensureIntFromPrompt(
    "Inserisci il primo numero: ",
    "Questo non è un numero! Inserisci un numero valido: ",
    (x) => x <= 0
);

paroleEDivisori[prompt("Metti la seconda parola: ")] = ensureIntFromPrompt(
    "Inserisci il secondo numero: ",
    "Questo non è un numero! Inserisci un numero valido: ",
    (x) => x <= 0
);

numeroDiPartenza = ensureIntFromPrompt("Inserisci il numero di partenza: ",
    "Questo numero non va bene! Riprova: ",
    (x) => x <= 0);

numeroFinale = ensureIntFromPrompt("Inserisci il numero finale: ",
    "Questo numero non va bene! Riprova: ",
    (x) => x > 3000 || x <= 0);

let contenitoreBlocchi = document.getElementById("container-scatole")
for (let i = numeroDiPartenza; i < numeroFinale + 1; i++) {
    risultatoParole = "";
    for (let word of Object.keys(paroleEDivisori)) {
        if (i % paroleEDivisori[word] == 0) {
            risultatoParole += word;
        }
    }
    risultatoParole = risultatoParole == "" ? i.toString() : risultatoParole;
    contenitoreBlocchi.innerHTML += `<div class="m-3">${risultatoParole}</div>`;
}