// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. E' consigliabile trasformare questi input in numeri :occhiolino:
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto su pagina/alert in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca riguardo l'arrotondamento.

let prezzoPerKm = 0.21;


let kmDaPercorrere = prompt("Quanti km devi fare?");
let anniPasseggero = prompt("Quanti anni hai?");

let prezzoDelBiglietto = kmDaPercorrere * prezzoPerKm;

let minorenne = anniPasseggero < 18;
let over65 = anniPasseggero >= 65;  

let sconto20 = prezzoDelBiglietto * 0.20;
let sconto40 = prezzoDelBiglietto * 0.40;  

let prezzoMinorenne =  prezzoDelBiglietto - sconto20;
let prezzoOver65 =  prezzoDelBiglietto - sconto40;


console.log( `Il prezzo del tuo biglietto è di €${prezzoDelBiglietto}`);
console.log( `Anni del passeggero ${anniPasseggero}`);
console.log(`Prezzo minorenne € ${prezzoMinorenne}`);
console.log(`Prezzo over 65 € ${prezzoOver65}`);

if (minorenne) {
    alert (`Prezzo del biglietto è di € ${prezzoMinorenne.toFixed(2)} applicato lo sconto per minorenni del 20% `)
} else if (over65) {
    alert (`Prezzo del biglietto è di € ${prezzoOver65.toFixed(2)} applicato lo sconto per gli over 65 del 40% `)
} else {
    alert (`Prezzo del biglietto è di € ${prezzoDelBiglietto.toFixed(2)}`)
}

