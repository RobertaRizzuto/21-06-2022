// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"

(function () {
  const nameArray = ["Luca", "Eleonora", "Roberta", "Pippo", "Pluto"];

  const indexPlusName = nameArray.map((name, index, array) => `${index}-${name}`);

  const nameToReverseIndex = nameArray.map((name, index, array) => array.length - 1 - index);

  const reverseName = nameArray.map((name, index, array) => nameArray[array.length - 1 - index]);

  console.log(indexPlusName);
  console.log(nameToReverseIndex);
  console.log(reverseName);
})();
