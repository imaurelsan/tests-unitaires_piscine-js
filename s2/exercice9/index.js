// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
    // Vérifie si la fin de la première plage est inférieure à la début de la seconde plage,
    // OU si la fin de la seconde plage est inférieure à la début de la première plage.
    // Si l'une de ces conditions est vraie, les plages ne se chevauchent pas.
    return fin1 < debut2 || fin2 < debut1;
}