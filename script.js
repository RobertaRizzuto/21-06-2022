// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"

(function () {
  const nameArray = ["Luca", "Eleonora", "Roberta", "Pippo", "Pluto"];

  const indexPlusName = nameArray.map((name, index) => `${index}-${name}`);

  const nameToReverseIndex = nameArray.map((name, index, array) => index).reverse();

  const reverseName = nameArray.reverse().map((name, index, array) => name);

  console.log(indexPlusName);
  console.log(nameToReverseIndex);
  console.log(reverseName);
})();
