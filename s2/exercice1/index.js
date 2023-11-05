// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const dateActuelle = new Date();
    const dateIlYADixAns = new Date(dateActuelle);
    dateIlYADixAns.setFullYear(dateIlYADixAns.getFullYear() - 10);
    return dateIlYADixAns.toISOString().split('T')[0]; // Format de la date : "AAAA-MM-JJ"

}
