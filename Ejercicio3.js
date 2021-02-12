/*
Crea un bucle anidado (un for dentro de un for). El bucle externo deberá iterar a través del array bobsFollowers, el bucle interno deberá iterar el array tinasFollowers. Si el elemento actual del bucle externo es el mismo que el elemento actual del bucle interno, haz un console.log() del elemento:

var bobsFollowers = ['Alex', 'Arlette', 'My', 'Jr'];
var tinasFollowers = ['Alex', 'Arlette', 'Steve'];
 */

let bobsFollowers = ['Alex', 'Arlette', 'My', 'Jr'];
let tinasFollowers = ['Alex', 'Arlette', 'Steve'];

for (let i = 0; i < bobsFollowers.length; i++) {
  // console.log(bobsFollowers[i]);
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(bobsFollowers[i]);
    }
  }
}
