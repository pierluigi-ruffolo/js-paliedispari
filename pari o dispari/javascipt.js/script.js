/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// l'utente sceglie pari o dispari
// l'utente inserisce un numero da 1 a 5;
// generiamo un numero random da 1 a 5 per il computer usando una funzione
// sommiamo i due numeri ottenuti
// controlliamo se la somma dei due numero è pari o dispari usando una funzione
// stabiliamo chi ha vinto

const sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();

if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
  alert("Inserisci pari o dispari");
} else {
  const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    alert("Inserisci un numero da 1 a 5");
  } else {
    const numeroComputer = generaNumeroComputer();
    const sommaNumeri = numeroUtente + numeroComputer;
    const risultatoSomma = calcolaPariODispari(sommaNumeri);
    let messaggioVittoria;

    if (sceltaUtente === risultatoSomma) {
      messaggioVittoria = "Ha vinto l'utente!!";
    } else {
      messaggioVittoria = "Ha vinto il computer!!";
    }
    console.log(`numero computer ${numeroComputer}`);
    console.log(`numero Utente ${numeroUtente}`);
    console.log(`Somma ${sommaNumeri}`);
    console.log(messaggioVittoria);
  }
}

// Funzione che genera un numero casuale da 1 a 5 per il computer
function generaNumeroComputer() {
  const numeroCasuale = Math.floor(Math.random() * 5) + 1;

  return numeroCasuale;
}

// Funzione che controlla se un numero è pari o dispari
function calcolaPariODispari(numero) {
  return numero % 2 === 0 ? "pari" : "dispari";
}
