function sommeIterative(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let n = Number(prompt("Entrez n pour la somme itérative :"));
console.log("Somme itérative =", sommeIterative(n));
