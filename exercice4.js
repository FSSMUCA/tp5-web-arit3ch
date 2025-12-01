let min = Number(prompt("Entrez le nombre minimal :"));
let max = Number(prompt("Entrez le nombre maximal :"));

for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " = Trois&Cinq");
    } else if (i % 3 === 0) {
        console.log(i + " = Trois");
    } else if (i % 5 === 0) {
        console.log(i + " = Cinq");
    } else {
        console.log(i);
    }
}

