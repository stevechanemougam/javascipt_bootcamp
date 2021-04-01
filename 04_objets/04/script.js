let tab_personnes = [
    {
    nom : "CHANEMOUGAM",
    prenom : "Steve",
    age : 37
    }
,
{
    nom : "CHANEMOUGAM",
    prenom : "Sanjay",
    age : 12
    }
,
{
    nom : "CHANEMOUGAM",
    prenom : "Chandhru",
    age : 8
    }
];


tab_personnes.map(personne => {console.log(Object.values(personne))});
tab_personnes.push({nom: "SAVARI",
                    prenom: "Nadia",
                    age : 41});

console.table(tab_personnes);
tab_personnes.map(personne => {console.log(Object.values(personne))});
