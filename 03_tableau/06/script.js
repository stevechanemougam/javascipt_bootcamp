
const arr = [72, 80, -99, 11, 32, -12, 22];


//Afficher le deuxième élément du tableau arr
console.log(arr[1]);

//Afficher l'index de l'élément qui vaut 11 du tableau arr
arr.map((valeur,indice) => {if (valeur == 11) console.log(indice)});

//Afficher la taille du tableau arr
console.log (arr.length);

//Ajouter un élément au tableau
arr.push(77);
console.table(arr);

//Enlever le dernier élément du tableau arr
arr.pop();
console.table(arr);

//Enlever le deuxième élément du tableau arr
arr.splice(2,1);
console.table(arr);

//Afficher l'inverse du tableau arr
arr.reverse();
console.table(arr);
