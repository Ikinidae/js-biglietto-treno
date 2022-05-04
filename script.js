// quanti km devi percorrere?
const numKm = prompt("Quanti km devi percorrere?");
console.log (parseInt(numKm));

// età
const eta = prompt("Quanti anni hai?");
console.log (parseInt(eta));

// prezzo x km
const prezzo = (numKm * 0.21);
console.log (prezzo);

// calcolo eventuale sconto (20% minorenne, 40% over 65)
if (eta < 18) {
    const prezzoScontoMinorenne = (prezzo/100)*80;
    console.log (prezzoScontoMinorenne.toFixed(2));
} else if (eta >= 65) {
    const prezzoScontoOver65 = (prezzo/100)*60;
    console.log (prezzoScontoOver65);
} else {
    console.log (prezzo)
}

// output con due decimali

