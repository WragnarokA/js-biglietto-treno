// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. E' consigliabile trasformare questi input in numeri :occhiolino:
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto su pagina/alert in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca riguardo l'arrotondamento.

let prezzoPerKm = 0.21;
let minorenne = 20*100;
let over65 = 40*100;  

let kmDaPercorrere = prompt("Quanti km devi fare?");
let anniPasseggero = prompt("Quanti anni hai?");

let prezzoDelBiglietto = kmDaPercorrere * prezzoPerKm;

console.log( `Il prezzo del tuo biglietto è di €${prezzoDelBiglietto}`);
console.log( `Anni del passeggero ${anniPasseggero}`);

// if (anniPasseggero < 18) {

//     console.log("hai lo sconto del 20% " prezzoDelBiglietto = prezzoDelBiglietto % 20 * 100);
    
// }
