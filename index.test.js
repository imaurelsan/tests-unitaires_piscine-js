const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});


describe('POST /s1/exercice1', () => {
    // ICI ON VA TESTER LA PREMIERE CONDITION OÙ n1 OU n2 SERAIT NULL 
    test('Test addition', async () => { // async permet d'utiliser le await
        const res = await request(app) // Ici on met await pour lui dire d'exécuter ceci avant d'exécuter les expect
            .post('/s1/exercice1')
            .send({ n1: 2, n2: 3 }) 
                
        expect(res.statusCode).toEqual(200); // Ici je teste que le statut est 200 (succès)
        expect(res.body).toEqual([{reponse : 5}]) // Ici je vérifie la réponse attendue qui est 5
    });

    // DANS LE MEME DESCRIBE ON TESTE QUAND n1 EST NULL
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice1')
            .send({n1: null, n2: 3})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });

    // DANS LE MEME DESCRIBE ON TESTE QUAND n2 EST NULL
    test('Test n2 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice1')
            .send({n1: 2, n2: null})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice2', () => {
    // ICI ON VA TESTER LA PREMIERE CONDITION OÙ n1 OU n2 SERAIT NULL 
    test('Test soustraction', async () => { // async permet d'utiliser le await
        const res = await request(app) // Ici on met await pour lui dire d'exécuter ceci avant d'exécuter les expect
            .post('/s1/exercice2')
            .send({ n1: 3, n2: 2 }) 
                
        expect(res.statusCode).toEqual(200); // Ici je teste que le statut est 200 (succès)
        expect(res.body).toEqual([{reponse : 1}]) // Ici je vérifie la réponse attendue qui est 5
    });

    // DANS LE MEME DESCRIBE ON TESTE QUAND n1 EST NULL
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice2')
            .send({n1: null, n2: 2})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });

    // DANS LE MEME DESCRIBE ON TESTE QUAND n2 EST NULL
    test('Test n2 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice2')
            .send({n1: 3, n2: null})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice3', () => {
    test('Test multiplication', async () => {
        const res = await request(app)
            .post('/s1/exercice3')
            .send({ n1: 8, n2: 3 }) 
                
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 24}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice3')
            .send({n1: null, n2: 3})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n2 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice3')
            .send({n1: 8, n2: null})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice4', () => {
    test('Test division', async () => {
        const res = await request(app)
            .post('/s1/exercice4')
            .send({ n1: 6, n2: 2 }) 
                
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 3}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice4')
            .send({n1: null, n2: 2})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n2 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice4')
            .send({n1: 6, n2: null})

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n1 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice4')
            .send({n1: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n2 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice4')
            .send({n2: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice5', () => {
    test('Test factorielle de 0', async () => {
        const res = await request(app)
            .post('/s1/exercice5')
            .send({ n1: 0 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Factorielle de 0 ou 1 doit être égale à 1"}])
    });
    test('Test factorielle de 1', async () => {
        const res = await request(app)
            .post('/s1/exercice5')
            .send({ n1: 1 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Factorielle de 0 ou 1 doit être égale à 1"}])
    });
    test('Factorielle', async () => {
        const res = await request(app)
            .post('/s1/exercice5')
            .send({ n1: 5 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 120}])
    });
});

describe('POST /s1/exercice6', () => {
    test('Test nombre Paire', async () => {
        const res = await request(app)
            .post('/s1/exercice6')
            .send({ n1: 2 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Le nombre est paire"}])
    });
    test('Test nombre Impaire', async () => {
        const res = await request(app)
            .post('/s1/exercice6')
            .send({ n1: 3 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Le nombre est impaire"}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice7')
            .send({n1: null})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n1 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice7')
            .send({n1: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice7', () => {
    test('Test Conversion de Celsius à Fahrenheit', async () => {
        const res = await request(app)
            .post('/s1/exercice7')
            .send({ n1: 2 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 35.6}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice7')
            .send({n1: null})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n1 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice7')
            .send({n1: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice8', () => {
    test('Test Calcul de laire dun cercle', async () => {
        const res = await request(app)
            .post('/s1/exercice8')
            .send({ n1: 4 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 50.26548245743669}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice8')
            .send({n1: null})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n1 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice8')
            .send({n1: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s1/exercice9', () => {
    test('Test de vérification de palindrome positif', async () => {
        const res = await request(app)
            .post('/s1/exercice9')
            .send({ n1: "kayak" }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : true}])
    });
    test('Test de vérification de palindrome négatif', async () => {
        const res = await request(app)
            .post('/s1/exercice9')
            .send({ n1: "allan" }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : false}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice9')
            .send({n1: ""})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un mot valide"}])
    });
    test('Test n1 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice9')
            .send({n1: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un mot valide"}])
    });
});

describe('POST /s1/exercice10', () => {
    test('Test de Calcul du PGCD de deux nombres premiers', async () => {
        const res = await request(app)
            .post('/s1/exercice10')
            .send({ n1: 7, n2: 11 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 1}])
    });
    test('Test n1 = n2', async () => {
        const res = await request(app)
            .post('/s1/exercice10')
            .send({ n1: 15, n2: 15 }) 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : 15}])
    });
    test('Test n1 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice10')
            .send({n1: null})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n2 est null', async () => {
        const res = await request(app)
            .post('/s1/exercice10')
            .send({n2: null})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n1 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice10')
            .send({n1: undefined, n2:7})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
    test('Test n2 est undefined', async () => {
        const res = await request(app)
            .post('/s1/exercice10')
            .send({n1:11, n2: undefined})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{reponse : "Veuillez entrer un nombre valide"}])
    });
});

describe('POST /s2/exercice1', () => {
    test('Test date il y a 10 ans', async () => {
        const res = await request(app)
            .post('/s2/exercice1');

        const dateActuelle = new Date(); //Crée un nouvel objet Date en utilisant la date actuelle
        //Créé une nouvelle instance de l'objet Date en utilisant la valeur de l'objet dateActuelle.
        const dateIlYADixAns = new Date(dateActuelle);  //Cela signifie que dateIlYADixAns contient également la même date et heure que dateActuelle
        dateIlYADixAns.setFullYear(dateIlYADixAns.getFullYear() - 10); //Modifie l'année de l'objet dateIlYADixAns en soustrayant 10 ans à l'année actuelle.
        const dateAttendue = dateIlYADixAns.toISOString().split('T')[0]; //Converti l'objet dateIlYADixAns en une chaîne de caractères au format ISO 8601 en utilisant la méthode toISOString()

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: dateAttendue }]);
    });
});

describe('POST /s2/exercice2', () => {
    test('Test formatage de date', async () => {
        const res = await request(app)
            .post('/s2/exercice2')
            .send({ date: "2023-11-03" });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: "03/11/2023" }]);
    });

    test('Test date non valide', async () => {
        const res = await request(app)
            .post('/s2/exercice2')
            .send({ date: "Date_invalide" });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
    });
});

describe('POST /s2/exercice3', () => {
    test('Test calcul de la différence en jours', async () => {
        const res = await request(app)
            .post('/s2/exercice3')
            .send({ date1: "2023-11-03", date2: "2023-11-10" });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: 7 }]);
    });

    test('Test dates non valides', async () => {
        const res = await request(app)
            .post('/s2/exercice3')
            .send({ date1: "date_invalide", date2: "2023-11-10" });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des dates valides" }]);
    });
});

describe('POST /s2/exercice4', () => {
    test('Test ajout de jours à une date', async () => {
        const res = await request(app)
            .post('/s2/exercice4')
            .send({ date: "2023-11-03", jours: 5 });

        expect(res.statusCode).toEqual(200);
        // Vérifie que la date résultante est correcte
        expect(res.body).toEqual([{ reponse: "2023-11-08" }]);
    });

    test('Test date non valide', async () => {
        const res = await request(app)
            .post('/s2/exercice4')
            .send({ date: "date_invalide", jours: 5 });

        expect(res.statusCode).toEqual(200);
        // Vérifie que la réponse est un message d'erreur approprié
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide et un nombre de jours valide" }]);
    });

    test('Test jours non valide', async () => {
        const res = await request(app)
            .post('/s2/exercice4')
            .send({ date: "2023-11-03", jours: "jours_invalide" });

        expect(res.statusCode).toEqual(200);
        // Vérifie que la réponse est un message d'erreur approprié
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide et un nombre de jours valide" }]);
    });
});

describe('POST /s2/exercice5', () => {
    test('Test année bissextile', async () => {
        const res = await request(app)
            .post('/s2/exercice5')
            .send({ annee: 2000 });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: 1 }]);
    });
    test('Test année non bissextile', async () => {
        const res = await request(app)
            .post('/s2/exercice5')
            .send({ annee: 2022 });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: 0 }]);
    });
    test('Test champ annee manquant', async () => {
        const res = await request(app)
            .post('/s2/exercice5')
            .send({});

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une année valide" }]);
    });
});

describe('POST /s2/exercice6', () => {
    test('Test premier jour du mois', async () => {
        const res = await request(app)
            .post('/s2/exercice6')
            .send({ date: '2023-11-04' });
        // Date attendue : 1er novembre 2023 à 00:00:00 UTC
        const expectedDate = new Date('2023-11-01T00:00:00.000Z');
        expect(res.statusCode).toEqual(200);
        // Vérifie que le mois de la date renvoyée est le même que celui de la date attendue
        expect(new Date(res.body[0].reponse).getMonth()).toEqual(expectedDate.getMonth());
        // Vérifie que l'année de la date renvoyée est la même que celle de la date attendue
        expect(new Date(res.body[0].reponse).getFullYear()).toEqual(expectedDate.getFullYear());
    });
    test('Test date non valide', async () => {
        const res = await request(app)
            .post('/s2/exercice6')
            .send({ date: 'non-une-date' });
        // Vérifie que le statut de la réponse est 400 (erreur client) parce que c'est une erreur
        expect(res.statusCode).toEqual(400);
        // Vérifie que la réponse indique "Veuillez entrer une date valide"
        expect(res.body[0].reponse).toEqual("Veuillez entrer une date valide");
    });
});

describe('POST /s2/exercice7', () => {
    // Test lorsque la date est valide
    test('Test date valide', async () => {
        const res = await request(app)
            .post('/s2/exercice7')
            .send({ date: '2023-11-04' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: 30 }]);
    });

    // Test lorsque la date est invalide
    test('Test date invalide', async () => {
        const res = await request(app)
            .post('/s2/exercice7')
            .send({ date: '2023-13-32' });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual([{ reponse: "La date n'est pas valide" }]);
    });

    // Test lorsque la date est manquante
    test('Test date manquante', async () => {
        const res = await request(app)
            .post('/s2/exercice7')
            .send({});

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual([{ reponse: "La date n'est pas valide" }]);
    });
});

describe('POST /s2/exercice8', () => {
    test('Test formatage de durée valide', async () => {
        const res = await request(app)
            .post('/s2/exercice8')
            .send({ heures: 2, minutes: 30 });

        // Vérifie que la réponse est un succès (statut 200) et que la réponse est correcte
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: '2 heure(s) et 30 minute(s)' }]);
    });
});

describe('POST /s2/exercice9', () => {
    test('Test chevauchement de dates (non chevauchantes)', async () => {
        const res = await request(app)
            .post('/s2/exercice9')
            .send({ debut1: '2023-01-01', fin1: '2023-01-15', debut2: '2023-02-01', fin2: '2023-02-15' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: true }]);
    });

    test('Test chevauchement de dates (chevauchantes)', async () => {
        const res = await request(app)
            .post('/s2/exercice9')
            .send({ debut1: '2023-01-01', fin1: '2023-01-15', debut2: '2023-01-10', fin2: '2023-02-15' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: false }]);
    });

    test('Test chevauchement de dates (chevauchantes sur les bords)', async () => {
        const res = await request(app)
            .post('/s2/exercice9')
            .send({ debut1: '2023-01-01', fin1: '2023-01-15', debut2: '2023-01-15', fin2: '2023-02-15' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: false }]);
    });

    test('Test chevauchement de dates (une plage incluse dans l_autre)', async () => {
        const res = await request(app)
            .post('/s2/exercice9')
            .send({ debut1: '2023-01-01', fin1: '2023-02-15', debut2: '2023-01-10', fin2: '2023-02-01' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: false }]);
    });
});

describe('POST /s2/exercice10', () => {
    test('Test calculer l\'âge', async () => {
        const res = await request(app)
            .post('/s2/exercice10')
            .send({ dateNaissance: '1990-05-15' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: 33 }]); // Vérifier la réponse attendue qui est l'âge calculé (33 ans)
    });

    test('Test date de naissance manquante', async () => {
        const res = await request(app)
            .post('/s2/exercice10')
            .send({ dateNaissance: null });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de naissance" }]); // Vérifier la réponse attendue en cas de date de naissance manquante
    });

    test('Test date de naissance non valide', async () => {
        const res = await request(app)
            .post('/s2/exercice10')
            .send({ dateNaissance: 'invalid-date' });
    
        expect(res.statusCode).toEqual(200); // Vérifier que la réponse a un statut 200 (succès)
        expect(res.body).toEqual([{ reponse: null }]); // Mettre à jour la réponse attendue en cas de date de naissance non valide
    });    
});