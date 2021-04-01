let personne = {
    nom : "CHANEMOUGAM",
    prenom : "Steve",
    age : 37
};


personne = Object.assign({e_mail : "steve.chanemougam@gmail.com"}, personne);
console.log(Object.keys(personne));
console.log(Object.values(personne));

for (const key in personne){
    console.log(key + " : " + personne[key]);
}
