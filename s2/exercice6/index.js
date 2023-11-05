// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error("Veuillez entrer une date valide");
    }

    // Crée un nouveau Date en utilisant l'année et le mois de la date d'entrée, avec le jour fixé à 1.
    return new Date(date.getFullYear(), date.getMonth(), 1);
}