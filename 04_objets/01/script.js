let personne = {
    nom : "CHANEMOUGAM",
    prenom : "Steve",
    age : 37
};

console.log(personne.nom);
console.log(Object.keys(personne));
console.log(Object.values(personne));

personne = Object.assign({e_mail : "steve.chanemougam@gmail.com"}, personne);
console.log(Object.keys(personne));
console.log(Object.values(personne));
