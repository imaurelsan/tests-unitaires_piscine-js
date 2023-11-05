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













