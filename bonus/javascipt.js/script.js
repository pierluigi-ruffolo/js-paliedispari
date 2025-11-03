// Bonus:
// Creare una funzione che data una frase restituisce
// questa frase, capitalizzando tutte le parole
/* "pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web"  */

const frase = "ciao mondo";

function capitalizza(frase) {
  const converto = frase.split(" ");
  let nuovaFrase = "";

  for (let i = 0; i < converto.length; i++) {
    const parola = converto[i];
    const primaLettera = parola[0].toUpperCase();
    const restoparola = parola.slice(1).toLowerCase();
    nuovaFrase = nuovaFrase + primaLettera + restoparola + " ";
  }
  return nuovaFrase;
}

const risultato = capitalizza(frase);
console.log(risultato);
