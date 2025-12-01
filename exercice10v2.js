function sommeRecursive(n) {
    if (n === 1) return 1;
    return n + sommeRecursive(n - 1);
}

n = Number(prompt("Entrez n pour la somme récursive :"));
console.log("Somme récursive =", sommeRecursive(n));

/*
1 - La récursion est plus proche des formules mathématiques. La boucle reste plus directe et facile à suivre. En général, les boucles sont plus lisibles.

2 - Les boucles sont plus rapides et utilisent moins de mémoire, car elles n'ont pas besoin de stocker chaque appel comme la récursion. La récursion est donc moins performante.

3 - Oui, si le nombre d'appels est très grand, chaque appel récursif utilise de la mémoire dans la pile d'appels. Trop d'appels peuvent provoquer un "stack overflow". Les boucles n'ont pas ce problème.

4 - On utilise une boucle pour traiter un grand nombre d'itérations ou pour un code plus efficace en mémoire et en performance. La récursion est utile pour les problèmes naturels pour ce type de solution, comme les arbres ou le "diviser pour régner".
*/
