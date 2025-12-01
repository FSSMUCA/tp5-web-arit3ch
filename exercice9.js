function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

let nombre = Number(prompt("entrez un nombre pour calculer sa factorielle :"));
console.log(`Factorielle de ${nombre} =`, factorielle(nombre));
