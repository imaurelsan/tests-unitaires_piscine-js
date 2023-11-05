// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
    if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
        return "Veuillez entrer des dates valides";
    }

    // Calcul de la différence en millisecondes
    const differenceEnMillisecondes = date2 - date1;

    // Conversion de la différence en jours
    const differenceEnJours = Math.floor(differenceEnMillisecondes / (1000 * 60 * 60 * 24));

    return differenceEnJours;
}