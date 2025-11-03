/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
(NON usare split, reverse e join) */

/* 
  PALINDROMA
  Chiedere all'utente una parola.
  Verificare che l'input non sia vuoto o numerico.
  Creare una funzione che controlla se la parola è palindroma.
  Scorre la parola al contrario costruendo una nuova stringa.
  Confronta la parola originale e quella invertita.
   Restituisce true/false.
  Mostra il risultato in console.
*/
const parolaUtente = prompt("Inserisci una Parola");
if (!isNaN(parolaUtente) || parolaUtente === "") {
  alert("Inserisci una parola");
} else {
  const risultato = verificaPalindroma(parolaUtente);
  if (risultato) {
    console.log("Parola Palindroma");
  } else {
    console.log("Non è palindroma");
  }
}

function verificaPalindroma(parola) {
  let parolaAlContrario = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    parolaAlContrario = parolaAlContrario + parola[i];
  }
  const confronto = parolaAlContrario === parola;
  return confronto;
}

/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */
