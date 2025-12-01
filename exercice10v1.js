function sommeIterative(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let n = Number(prompt("entrez n pour la somme itérative :"));
console.log("somme itérative =", sommeIterative(n));
