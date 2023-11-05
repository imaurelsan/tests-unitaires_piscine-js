// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        return "Veuillez entrer une date valide";
    }

    const jour = date.getDate().toString().padStart(2, '0');
    const mois = (date.getMonth() + 1).toString().padStart(2, '0');
    const annee = date.getFullYear().toString();

    return `${jour}/${mois}/${annee}`;
}