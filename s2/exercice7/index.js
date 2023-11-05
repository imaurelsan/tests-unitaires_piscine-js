// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    if (!(date instanceof Date)) {
        throw new Error("La date fournie n'est pas valide");
    }

    // Obtenez le mois suivant de la date
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    // Définissez la date au 0, ce qui signifie le dernier jour du mois précédent
    nextMonth.setDate(0);

    return nextMonth.getDate();
}
