// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {
    // Une année bissextile est divisible par 4, sauf si elle est aussi divisible par 100 mais pas par 400.
    // Utilisation de l'opérateur ternaire pour vérifier si l'année est bissextile
    return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0) ? 1 : 0;
}