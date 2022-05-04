// quanti km devi percorrere?
const numKm = prompt("Quanti km devi percorrere?");
console.log (parseInt(numKm));

// età
const eta = prompt("Quanti anni hai?");
console.log (parseInt(eta));

// calcolo eventuale sconto (20% minorenne, 40% over 65)
const prezzoScontoMinorenne = 0.21*80/100;
const prezzoScontoOver65 = 0.21*60/100;
let prezzo

if (eta < 18) {
    prezzo = numKm*prezzoScontoMinorenne;
    prezzo = prezzo.toFixed(2);
    console.log (prezzoScontoMinorenne);
} else if (eta >= 65) {
    prezzo = numKm*prezzoScontoOver65;
    prezzo = prezzo.toFixed(2);
    console.log (prezzoScontoOver65);
} else {
    prezzo = numKm*0.21;
    prezzo = prezzo.toFixed(2);
    console.log (prezzo);
}

// output con due decimali
document.getElementById("prezzo-finale").innerHTML = "Il prezzo del tuo biglietto è €" + prezzo;