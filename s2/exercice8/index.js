// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
    // Vérifie que les heures et les minutes sont des nombres
    if (typeof heures !== 'number' || typeof minutes !== 'number') {
        throw new Error('Les heures et les minutes doivent être des nombres.');
    }
    // Vérifie que les heures et les minutes sont des valeurs valides
    if (heures < 0 || minutes < 0 || minutes >= 60) {
        throw new Error('Les heures et les minutes doivent être des valeurs valides.');
    }
    // Convertit la durée en minutes, formate les heures et les minutes, et renvoie la réponse
    const dureeEnMinutes = heures * 60 + minutes;
    const heuresFormatees = Math.floor(dureeEnMinutes / 60);
    const minutesFormatees = dureeEnMinutes % 60;

    return `${heuresFormatees} heure(s) et ${minutesFormatees} minute(s)`;
}