// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    // On vérifie d'abord que la date de naissance est une chaîne non vide
    if (typeof dateNaissance === 'string' && dateNaissance.trim() !== '') {
        const dateNaissanceObj = new Date(dateNaissance); // Convertir la date de naissance en objet Date
        const maintenant = new Date(); // Obtenir la date actuelle

        // Calculer la différence entre les années
        const age = maintenant.getFullYear() - dateNaissanceObj.getFullYear();

        // Vérifier si l'anniversaire de la personne est déjà passé cette année
        if (maintenant.getMonth() < dateNaissanceObj.getMonth() || (maintenant.getMonth() === dateNaissanceObj.getMonth() && maintenant.getDate() < dateNaissanceObj.getDate())) {
            age--; // Si l'anniversaire n'est pas encore arrivé, réduire l'âge d'une année
        }

        return age;
    } else {
        return "Veuillez entrer une date de naissance valide";
    }
}