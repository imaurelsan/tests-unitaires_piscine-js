const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;
app.use(express.json())
app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => { // CECI EST UNE ROUTE : LA ROUTE DE L'EXERCICE 1 EN GROS...
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    // On intègre tous les cas d'erreurs à tester ensuite dans l'index.test.js
    if (n1 == null || n2 == null) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if (!n1) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n2) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = addition(n1, n2);
    return res.status(200).json([{ reponse: a }]);
  });

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
      if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
    
      if (!n2) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }

    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
      if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!n2) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }

    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
      if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!n2) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }

    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1
    if (n1 === 0 || n1 === 1) {
        return res.json([{ reponse: "Factorielle de 0 ou 1 doit être égale à 1" }]);
    }
    if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = factorielle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    if (n1 === 2) {
        return res.json([{ reponse: "Le nombre est paire" }]);
    }
    if (n1 === 3) {
        return res.json([{ reponse: "Le nombre est impaire" }]);
    }
    if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    if (n1 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
   
    let a = estPairOuImpair(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice7', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = celsiusEnFahrenheit(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice8', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = aireCercle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice9', (req, res) => {
    const n1 = req.body.n1
    if (n1 == "") {
        return res.json([{ reponse: "Veuillez entrer un mot valide" }]);
    }
    if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un mot valide" }]);
    }

    let a = estPalindrome(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    if (n1 === 0 && n2 === 0) {
        return res.json([{ reponse: 0 }]);
    }
    if (n1 === 0 || n2 === 0) {
        return res.json([{ reponse: Math.abs(n1 || n2) }]);
    }
    if (n1 === n2) {
        return res.json([{ reponse: n1 }]);
    }
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    if (!n1 || !n2) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice1', (req, res) => {
    const dateDixAnsAuparavant = dateIlYADixAns();
    return res.json([{ reponse: dateDixAnsAuparavant }]);
});

app.post('/s2/exercice2', (req, res) => {
    const date = req.body.date;

    if (!date) {
        return res.json([{ reponse: "Veuillez entrer une date valide" }]);
    }

    const dateFormatee = formaterDate(new Date(date));
    return res.json([{ reponse: dateFormatee }]);
});

app.post('/s2/exercice3', (req, res) => {
    const date1 = req.body.date1;
    const date2 = req.body.date2;

    if (!date1 || !date2) {
        return res.json([{ reponse: "Veuillez entrer deux dates valides" }]);
    }

    const difference = differenceEnJours(new Date(date1), new Date(date2));
    return res.json([{ reponse: difference }]);
});

app.post('/s2/exercice4', (req, res) => {
    const date = req.body.date;
    const jours = req.body.jours;

    try {
        // Appel de la fonction ajouterJours en passant les paramètres date et jours
        const dateAvecJours = ajouterJours(new Date(date), parseInt(jours));
        // Renvoie la date résultante dans la réponse JSON
        return res.json([{ reponse: dateAvecJours }]);
    } catch (error) {
        // En cas d'erreur, renvoie un message d'erreur approprié dans la réponse JSON
        return res.json([{ reponse: "Veuillez entrer une date valide et un nombre de jours valide" }]);
    }
});

app.post('/s2/exercice5', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice6', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice7', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice8', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice9', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice10', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


