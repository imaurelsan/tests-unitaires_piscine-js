// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    // Utilisation de valeurs par défaut pour les paramètres date et jours
    // Si les paramètres ne sont pas fournis, ils sont initialisés avec la date actuelle et 0 jours.

    // Création d'une copie de la date d'origine
    const nouvelleDate = new Date(date);
    // Ajout du nombre de jours à la date
    nouvelleDate.setDate(nouvelleDate.getDate() + jours);
    // Formatage de la nouvelle date en chaîne de caractères au format ISO
    return nouvelleDate.toISOString().split('T')[0];
    // Renvoie la nouvelle date au format "AAAA-MM-JJ"
}
