/* 
Dados estos tres arrays:

​​​​carnivores = [ 'lion','shark', 'wolve', 'puma', 'snake'];
herbivores = [ 'elephant' , 'giraffe' , 'gacelle' , 'hippo' , 'koala' ];
omnivores = [ 'human' , 'monkey', 'dog' , 'bear' , 'pig' ];

Define una variable llamada animals que referencie a los arrays anteriores: [carnivores, herbivores, omnivores].
 
Crea un bucle FOR que cambie cada string en el array de cada dieta para que sean plurales. Por ejemplo: ['lion',...] -> ['lions',...]
Crea un bucle FOR que verifique en cada uno de los arrays cual es el animal con el nombre mas largo y al final, haz console.log() de un nuevo array de 3 posiciones, cada una con el animal mas largo de cada dieta respectivamente.

(Pista: animals[1][0] será 'elephant').
*/

let newArray = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

let array = [[], [], []];

let arrayNombre = [];
let longest = '';

let carnivores = ['lion', 'shark', 'wolve', 'puma', 'snake'];
let herbivores = ['elephant', 'giraffe', 'gacelle', 'hippo', 'koala'];
let omnivores = ['human', 'monkey', 'dog', 'bear', 'pig'];

let animals = [carnivores, herbivores, omnivores];

for (let i = 0; i < animals.length; i++) {
  for (let j = 0; j < animals[i].length; j++) {
    let palabra = animals[i][j] + 's';
    if (palabra.length > longest.length) {
      longest = palabra;
    }

    // Array sin push
    newArray[i][j] += palabra;
    // Con push
    array[i].push(palabra);
  }

  arrayNombre.push(longest);
  longest = '';
}

console.log(arrayNombre);
